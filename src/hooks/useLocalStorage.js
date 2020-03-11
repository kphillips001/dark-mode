import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
  // set up state property
  // if local data does not have that, else use initial data
  // capture the values of the input
  // update localStorage when needed
  // Don't forget to parse data from localStorage, and stringify new data getting stored
  const [storedValue, setStoredValue] = useState(() => {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
    })

  const setValue = value => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
    }

  return [storedValue, setValue]
}