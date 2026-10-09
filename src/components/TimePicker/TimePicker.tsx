import TimeInput from "../TimeInput/TimeInput";

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
        <TimeInput 
            hours={hours}
            minutes={minutes}
            updateHours={updateHours}
            updateMinutes={updateMinutes}
            incrementHours={incrementHours}
            decrementHours={decrementHours}
            incrementMinutes={incrementMinutes}
            decrementMinutes={decrementMinutes}
        />
    )
};

export default TimePicker;