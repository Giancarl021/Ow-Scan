import { useState, useCallback } from 'react';

const useTimeoutState = (initialState, timeout) => {
    const [state, setState] = useState(initialState);
    const [timeoutCallback, setTimeoutCallback] = useState(null);

    const setTimeoutState = useCallback(newState => {
        if(timeoutCallback) {
            clearTimeout(timeoutCallback);
            setTimeoutCallback(null);
        }
        setState(newState);
        setTimeoutCallback(setTimeout(() => setState(initialState), timeout));
    }, [initialState, timeout, timeoutCallback]);

    return [state, setTimeoutState];
};

export default useTimeoutState;