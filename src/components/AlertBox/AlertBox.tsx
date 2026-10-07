import { useAlert } from "../../context/AlertContext";
import "./AlertBox.css";

export default function AlertBox () {
    const { message, type, hideAlert } = useAlert();

    if (!message) return null;

    return (
        <div id="alertBox" className={type ? type : ""}>
            <p>{message}</p>
            <button onClick={hideAlert} className="closeButton">X</button>
        </div>
    )
};

