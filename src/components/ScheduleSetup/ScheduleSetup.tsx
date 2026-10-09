import ModeSelector from "../ModeSelector/ModeSelector";
import ActionPicker from "../ActionPicker/ActionPicker";
import CountdownMode from "../CountdownMode/CountdownMode";
import TimeMode from "../TimeMode/TimeMode";
import { useActionStatus } from "../../context/ActionStatus";

function ScheduleSetup () {
    const { isActive, mode } = useActionStatus();

    if (isActive) return null;
    
    return (
        <>
            <ModeSelector />
            <ActionPicker />
            {mode === 'countdown' ? <CountdownMode /> : <TimeMode />}
        </>
    )
};

export default ScheduleSetup;