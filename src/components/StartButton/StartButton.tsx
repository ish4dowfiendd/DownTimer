import './StartButton.css';

function StartButton () {
    return (
        <div id="startButtonContainer">
            <button id="startButton" className={true ? "disabledButton" : ""}>Start</button>
        </div>
    )
};

export default StartButton;