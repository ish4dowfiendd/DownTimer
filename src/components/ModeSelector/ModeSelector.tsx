import { useState } from "react"; // Remove when context exists.
import "./ModeSelector.css";

function ModeSelector () {
    const [ mode, setMode ] = useState<"time" | "countdown">("time"); // Set to context when exists.
    return (
        <div id="modeSelectorContainer">
            <button onClick={() => setMode("time")} className={mode === "time" ? "selected" : ""}>Time</button>
            <button onClick={() => setMode("countdown")} className={mode === "countdown" ? "selected" : ""}>Countdown</button>
        </div>
    )
};

export default ModeSelector;
