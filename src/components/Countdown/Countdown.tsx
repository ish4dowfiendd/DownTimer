import timer from "../../assets/icons8-timer-96.png";
import './Countdown.css';

function Countdown () {
    if (true) return null;

    return (
        <div id="countdownContainer">
            <div id="countdownContent">
                <img src={timer} alt="Timer Icon" />
                <p>Action in: <br/><span>5</span></p>
                <button id="cancelButton" onClick={() => {}}>X</button>
            </div>
        </div>
    )
}

export default Countdown;