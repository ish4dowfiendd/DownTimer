import { createContext, useContext, useState, useEffect } from "react";

type AlertType = "success" | "error";

type AlertState = {
    message: string | null;
    type: AlertType | null;
    showAlert: (message: string, type: AlertType) => void;
    hideAlert: () => void;
}

const AlertContext = createContext<AlertState | undefined>(undefined);

export function AlertProvider({ children }: { children: React.ReactNode }) {
    const [message, setMessage] = useState<string | null>(null);
    const [type, setType] = useState<AlertType | null>(null);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null);
                setType(null);
            });
            
            return () => clearTimeout(timer);
        };
    }, [message]);

    const showAlert = (message: string, type: AlertType) => {
        setMessage(message);
        setType(type);
    };

    const hideAlert = () => {
        setMessage(null);
        setType(null);
    };

    return (
        <AlertContext.Provider value={{ message, type, showAlert, hideAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

export function useAlert() {
    const context = useContext(AlertContext);

    if (!context) {
        throw new Error("useAlert must be used within an AlertProvider");
    };

    return context;
};
