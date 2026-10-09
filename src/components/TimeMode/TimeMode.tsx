import { useState } from "react";
import TimePicker from "../TimePicker/TimePicker";
import StartButton from "../StartButton/StartButton";

function TimeMode () {
    const [ hours, setHours ] = useState(() => new Date().getHours().toString());
    const [ minutes, setMinutes ] = useState(() => new Date().getMinutes().toString());

    return (
        <>
            <TimePicker hours={hours} setHours={setHours} minutes={minutes} setMinutes={setMinutes} />
            <StartButton hours={hours} minutes={minutes} />
        </>
    )
}

export default TimeMode;