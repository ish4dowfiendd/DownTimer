import { useActionStatus } from "../../context/ActionStatus";
import { convertCountdownToTimestamp, convertTimeToTimestamp } from "../../utils/timeUtils";
import timerIcon from "../../assets/icons8-timer-96.png";
import './StartButton.css';

type StartButtonProps = {
    hours: string;
    minutes: string;
};

function StartButton ({ hours, minutes }: StartButtonProps) {
    const { isActive, start, mode } = useActionStatus();

    function handleStart () {
        const targetTime = mode === "countdown" ? convertCountdownToTimestamp(Number(hours), Number(minutes)) : convertTimeToTimestamp(Number(hours), Number(minutes));
        start(targetTime);
    };

    return (
        <div id="startButtonContainer">
            <button id="startButton" className={isActive ? "disabledButton" : ""} onClick={() => handleStart()}><img src={timerIcon} alt="timer icon" id="timerIcon" />{mode === "countdown" ? "Start Countdown" : "Set Time"}</button>
        </div>
    );
}

export default StartButton;