type TimePickerProps = {
    hours: string;
    setHours: (hour: string) => void;
    minutes: string;
    setMinutes: (minute: string) => void;
};

function TimePicker ({ hours, setHours, minutes, setMinutes }: TimePickerProps) {
    
    function updateHours (hour: string) {
        if (Number(hour) >= 0 && Number(hour) <= 23) {
            setHours(hour);
        }
    };

    function updateMinutes (minute: string) {
        if (Number(minute) >= 0 && Number(minute) <= 59) {
            setMinutes(minute);
        };
    };

    function incrementHours () {
        setHours(String((Number(hours || 0) + 1) % 24).padStart(2, "0"));
    };

    function decrementHours () {
        setHours(String((Number(hours || 0) - 1 + 24) % 24).padStart(2, "0"));
    };

    function incrementMinutes () {
        setMinutes(String((Number(minutes || 0) + 1) % 60).padStart(2, "0"));
    };

    function decrementMinutes () {
        setMinutes(String((Number(minutes || 0) - 1 + 60) % 60).padStart(2, "0"));
    };

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

export default TimePicker;