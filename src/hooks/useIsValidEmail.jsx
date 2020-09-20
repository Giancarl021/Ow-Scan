import { useState, useCallback } from 'react';

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const useIsValidEmail = () => {
    const [isValid, setValid] = useState(true);

    const setEmail = useCallback(email => {
        if (!email || emailRegex.test(email)) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, []);

    return [isValid, setEmail];
};

export default useIsValidEmail;