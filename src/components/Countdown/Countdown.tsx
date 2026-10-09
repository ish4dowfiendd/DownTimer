import timer from "../../assets/icons8-timer-96.png";
import { useActionStatus } from "../../context/ActionStatus";
import useCountdown from "../../hooks/useCountdown";
import './Countdown.css';

function Countdown () {
    const { remainingSeconds } = useCountdown();
    const { action, isActive, cancel } = useActionStatus();

    if (!isActive) return null;

    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;

    return (
        <div id="countdownContainer">
            <div id="countdownContent">
                <img src={timer} alt="Timer Icon" />
                <p>{action.charAt(0).toUpperCase() + action.slice(1)} in: <br/><span>{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span></p>
                <button id="cancelButton" onClick={() => cancel()}>X</button>
            </div>
        </div>
    )
}

export default Countdown;