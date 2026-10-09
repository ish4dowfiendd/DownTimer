import { createContext, useContext, useState } from "react";

type ActionStatusState = {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
    hasFinished: boolean;
    setHasFinished: (hasFinished: boolean) => void;
    mode: "countdown" | "time";
    setMode: (mode: "countdown" | "time") => void;
    action: "shutdown" | "restart" | "sleep" | "hibernate" | "logout" | "lock";
    setAction: (action: "shutdown" | "restart" | "sleep" | "hibernate" | "logout" | "lock") => void;
    targetTime: number;
    setTargetTime: (seconds: number) => void;
    start: (time: number) => void;
    cancel: () => void;
    complete: () => void;
};

const ActionStatusContext = createContext<ActionStatusState | null>(null);

export function ActionStatusProvider({ children }: { children: React.ReactNode }) {
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    const [mode, setMode] = useState<"countdown" | "time">("countdown");
    const [targetTime, setTargetTime] = useState(0);
    const [action, setAction] = useState<"shutdown" | "restart" | "sleep" | "hibernate" | "logout" | "lock">("shutdown");

    function start (time: number) {
        setIsActive(true);
        setHasFinished(false);
        setTargetTime(time); 
    };

    function cancel () {
        setIsActive(false);
        setHasFinished(false);
        setMode("countdown");
        setTargetTime(0);
        setAction("shutdown");
    };

    function complete () {
        setIsActive(false);
        setHasFinished(true);
        setTargetTime(0);
    };

    return (
        <ActionStatusContext.Provider value={{ isActive, setIsActive, hasFinished, setHasFinished, mode, setMode, action, setAction, targetTime, setTargetTime, start, cancel, complete }}>
            {children}
        </ActionStatusContext.Provider>
    );
}

export function useActionStatus() {
    const context = useContext(ActionStatusContext);
    if (!context) {
        throw new Error("useActionStatus must be used within an ActionStatusProvider");
    }
    return context;
}