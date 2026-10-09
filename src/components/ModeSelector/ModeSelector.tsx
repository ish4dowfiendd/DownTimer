import { useActionStatus } from "../../context/ActionStatus";
import "./ModeSelector.css";

function ModeSelector () {
    const { mode, setMode } = useActionStatus();

    return (
        <div id="modeSelectorContainer">
            <button onClick={() => setMode("countdown")} className={mode === "countdown" ? "selected" : ""}>Countdown</button>
            <button onClick={() => setMode("time")} className={mode === "time" ? "selected" : ""}>Time</button>
        </div>
    )
};

export default ModeSelector;
