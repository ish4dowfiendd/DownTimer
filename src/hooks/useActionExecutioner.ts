import { useAlert } from "../context/AlertContext";
import { invoke } from "@tauri-apps/api/core";
type Action = "shutdown" | "restart" | "sleep" | "hibernate" | "lock" | "logout";

function useActionExecutioner() {
    const { showAlert } = useAlert();
    const executeAction = async (action: Action) => {
        try {
            await invoke(action);
        } catch (error) {
            showAlert(`Failed to perform action: ${action}`, "error");
        };
    };

    const sendStatus = async (remainingSeconds: number, action: Action, isActive: boolean) => {
        const actionText = action.charAt(0).toUpperCase() + action.slice(1);
        try {
            await invoke("update_tray_status", { remainingSeconds, actionText, isActive });
        } catch (error) {
            showAlert(`Failed to update tray status: ${action}`, "error");
        }
    };

    return { executeAction, sendStatus };
};

export default useActionExecutioner;