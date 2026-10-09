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

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![shutdown, restart, sleep, hibernate, lock, logout])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
