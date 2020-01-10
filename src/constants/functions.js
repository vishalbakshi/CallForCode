import { useState, useEffect } from 'react';

const useStateWithLocalStorage = (localStorageKey) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(localStorageKey)) || {}
    );

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value))
    });

    return [value, setValue];
}

const useFormInput = () => {
    // add form validation logic here as well
    const [value, setValue] = useStateWithLocalStorage('userInputLocalStorage');
    console.log(value, setValue)
    const handleChange = event => {
        setValue({...value, [event.target.name]: event.target.value })
    }

    return {
        value,
        onChange: handleChange
    }
}


export default useFormInput;