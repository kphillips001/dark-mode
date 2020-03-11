import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [theme, setTheme] = useLocalStorage('darkmode', initialValue);

    // check value from useLocalStorage if true/false
    useEffect(() => {
        if (theme === true) {
            return document.body.classList.add("dark-mode")
        } else {
            return document.body.classList.remove("dark-mode")
        }
    }, [theme])
    return [theme, setTheme]
}