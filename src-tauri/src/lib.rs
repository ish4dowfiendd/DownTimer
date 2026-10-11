use tauri::{
    menu::{Menu, MenuItem},
    tray::TrayIconBuilder, AppHandle, Manager, Wry
};

struct TrayStatusItem(MenuItem<Wry>);

#[tauri::command]
fn shutdown() -> Result<(), String> {
    std::process::Command::new("shutdown")
        .arg("/s")
        .arg("/t")
        .arg("0")
        .spawn()
        .map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
fn restart() -> Result<(), String> {
    std::process::Command::new("shutdown")
        .arg("/r")
        .arg("/t")
        .arg("0")
        .spawn()
        .map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
fn sleep() -> Result<(), String> {
    std::process::Command::new("rundll32.exe")
        .arg("powrprof.dll,SetSuspendState 0,1,0")
        .spawn()
        .map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
fn hibernate() -> Result<(), String> {
    std::process::Command::new("rundll32.exe")
        .arg("powrprof.dll,SetSuspendState 1,1,0")
        .spawn()
        .map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
fn lock() -> Result<(), String> {
    std::process::Command::new("rundll32.exe")
        .arg("user32.dll,LockWorkStation")
        .spawn()
        .map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
fn logout() -> Result<(), String> {
    std::process::Command::new("shutdown")
        .arg("/l")
        .spawn()
        .map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
fn update_tray_status(app: AppHandle, remaining_seconds: u64, action_text: String, is_active: bool) -> Result<(), String> {
    let status = app.state::<TrayStatusItem>();

    let text = if is_active {
        let hours = remaining_seconds / 3600;
        let minutes = (remaining_seconds % 3600) / 60;
        let seconds = remaining_seconds % 60;

        if hours > 0 {
            format!("{} in {}:{:02}:{:02}", action_text, hours, minutes, seconds)
        } else {
            format!("{} in {:02}:{:02}", action_text, minutes, seconds)
        }
    } else {
        "Inactive".to_string()
    };

    status.0.set_text(text).map_err(|e| e.to_string())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            shutdown,
            restart,
            sleep,
            hibernate,
            lock,
            logout,
            update_tray_status
        ])
        .setup(|app| {
            let show = MenuItem::with_id(
                app,
                "show",
                "Show Window",
                true,
                None::<&str>,
            )?;
            
            let quit = MenuItem::with_id(
                app,
                "quit",
                "Quit",
                true,
                None::<&str>,
            )?;

            let status = MenuItem::with_id(
                app,
                "status",
                "Ready",
                false,
                None::<&str>,
            )?;

            let menu = Menu::with_items(app, &[&show, &status, &quit])?;

            app.manage(TrayStatusItem(status));

            TrayIconBuilder::new()
                .icon(app.default_window_icon().unwrap().clone())
                .menu(&menu)
                .on_menu_event(|app, event| match event.id().as_ref() {
                    "show" => {
                        if let Some(window) = app.get_webview_window("main") {
                            let _ = window.show();
                            let _ = window.set_focus();
                        }
                    }
                    "quit" => {
                        app.exit(0);
                    }
                    _ => {}
                })
                .build(app)?;
            Ok(())
        })
        .on_window_event(|window, event| {
            if let tauri::WindowEvent::CloseRequested { api, .. } = event {
                api.prevent_close();
                let _ = window.hide();
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
    }
