import './TimeInput.css';

type TimeInputProps = {
    hours: string;
    updateHours: (hour: string) => void;
    minutes: string;
    updateMinutes: (minute: string) => void;
    incrementHours: () => void;
    decrementHours: () => void;
    incrementMinutes: () => void;
    decrementMinutes: () => void;
}

function TimeInput({ hours, minutes, updateHours, updateMinutes, incrementHours, decrementHours, incrementMinutes, decrementMinutes }: TimeInputProps) {
    return (
        <div id="timerContainer">
            <div id="hoursContainer" className="numberInputContainer">
                <div className="numberInputField">
                    <input id="hoursInput" type="number" min="0" max="23" value={hours} onChange={(e) => updateHours(e.target.value)} />
                    <div className="numberButtonsContainer">
                        <button onClick={incrementHours}>▲</button>
                        <button onClick={decrementHours}>▼</button>
                    </div>
                </div>
                <p>Hours</p>
            </div>
            <div id="minsContainer" className="numberInputContainer">
                <div className="numberInputField">
                    <input id="minutesInput" type="number" min="0" max="59" value={minutes} onChange={(e) => updateMinutes(e.target.value)} />
                    <div className="numberButtonsContainer">
                        <button onClick={incrementMinutes}>▲</button>
                        <button onClick={decrementMinutes}>▼</button>
                    </div>
                </div>
                <p>Minutes</p>
            </div>
        </div>
    )
};

export default TimeInput;