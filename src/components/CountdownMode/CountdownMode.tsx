import { useState } from "react";
import CountdownPicker from "../CountdownPicker/CountdownPicker";
import StartButton from "../StartButton/StartButton";

function CountdownMode () {
    const [ hours, setHours ] = useState("0");
    const [ minutes, setMinutes ] = useState("0");

    return (
        <>
            <CountdownPicker hours={hours} setHours={setHours} minutes={minutes} setMinutes={setMinutes} />
            <StartButton hours={hours} minutes={minutes} />
        </>
    )
}

export default CountdownMode;