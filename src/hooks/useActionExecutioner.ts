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

    return { executeAction };
};

export default useActionExecutioner;