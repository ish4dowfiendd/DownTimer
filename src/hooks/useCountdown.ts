import { useEffect, useState } from 'react';
import { useActionStatus } from '../context/ActionStatus';
import useActionExecutioner from './useActionExecutioner';

function useCountdown () {
    const { targetTime, isActive, action, hasFinished, complete } = useActionStatus();
    const [ remainingSeconds, setRemainingSeconds ] = useState(0);
    const { executeAction, sendStatus } = useActionExecutioner();
    
    useEffect(() => {
        if (!isActive || targetTime === null) return;

        const update = () => {
            const remaining = Math.max(0, Math.ceil((targetTime - Date.now()) / 1000));
            setRemainingSeconds(remaining);
            sendStatus(remaining, action, isActive);
            if (!hasFinished && remaining <= 0) {
                complete();
                executeAction(action);
            }
        };

        update();

        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, [targetTime, isActive]);
    
    return { remainingSeconds };
};

export default useCountdown;