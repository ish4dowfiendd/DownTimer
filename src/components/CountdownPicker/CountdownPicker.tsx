import TimeInput from '../TimeInput/TimeInput';

type CountdownPickerProps = {
    hours: string;
    setHours: (hour: string) => void;
    minutes: string;
    setMinutes: (minute: string) => void;
};

function CountdownPicker ({ hours, setHours, minutes, setMinutes }: CountdownPickerProps) {
    
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

export default CountdownPicker;