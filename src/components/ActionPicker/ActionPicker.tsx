import { useState } from "react"; // remove when context created
import "./ActionPicker.css";

function ActionPicker () {
    const [ action, setAction ] = useState<"shutdown" | "restart" | "sleep">("shutdown"); // set to context when exists
    return (
        <div id="actionPickerContainer">
            <p>Choose an action:</p>
            <select id="actionSelect" value={action} onChange={(e) => setAction(e.target.value as "shutdown" | "restart" | "sleep")}>
                <option value="shutdown">Shutdown</option>
                <option value="restart">Restart</option>
                <option value="sleep">Sleep</option>
                <option value="hibernate">Hibernate</option>
                <option value="logoff">Log Off</option>
                <option value="lock">Lock</option>
            </select>
        </div>
    );
};

export default ActionPicker;