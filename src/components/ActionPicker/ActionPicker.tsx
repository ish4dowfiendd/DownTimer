import { useActionStatus } from "../../context/ActionStatus";
import "./ActionPicker.css";

function ActionPicker () {
    const { action, setAction } = useActionStatus();
    
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