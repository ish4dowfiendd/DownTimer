import { useState } from 'react';
import './CountdownPicker.css';

function CountdownPicker () {
    const [time, setTime] = useState(Date.now()); // Change to contxt when created
    const [hours, setHours] = useState("0");
    const [minutes, setMinutes] = useState("0");

    function updateHours (hour: string) {
        if (Number(hour) >= 0) {
            setHours(hour);
        };
    };

    function updateMinutes (minute: string) {
        if (Number(minute) >= 0 && Number(minute) <= 59) {
            setMinutes(minute);
        };
    };

    function incrementHours () {
        setHours(String(Number(hours) + 1));
    };

    function decrementHours () {
        if (Number(hours) > 0) {
            setHours(String(Number(hours) - 1));
        };
    };

    function incrementMinutes () {
        if (Number(minutes) < 59) {
            setMinutes(String(Number(minutes) + 1));
        };
    };

    function decrementMinutes () {
        if (Number(minutes) > 0) {
            setMinutes(String(Number(minutes) - 1));
        };
    };

    return (
        <div id="timerContainer">
            <div id="hoursContainer" className="numberInputContainer">
                <div className="numberInputField">
                    <input id="hoursInput" type="number" value={hours} onChange={(e) => updateHours(e.target.value)} />
                    <div className="numberButtonsContainer">
                        <button onClick={incrementHours}>▲</button>
                        <button onClick={decrementHours}>▼</button>
                    </div>
                </div>
                <p>Hours</p>
            </div>
            <div id="minsContainer" className="numberInputContainer">
                <div className="numberInputField">
                    <input id="minutesInput" type="number" value={minutes} onChange={(e) => updateMinutes(e.target.value)} />
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

export default CountdownPicker;