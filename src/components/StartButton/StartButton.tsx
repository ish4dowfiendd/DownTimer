import { useActionStatus } from "../../context/ActionStatus";
import { convertCountdownToTimestamp, convertTimeToTimestamp } from "../../utils/timeUtils";
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
            <button id="startButton" className={isActive ? "disabledButton" : ""} onClick={() => handleStart()}>Start</button>
        </div>
    );
}

export default StartButton;