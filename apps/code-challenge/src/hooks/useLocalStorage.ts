import { useState } from "react";
//CREDIT: https://usehooks.com/useLocalStorage/
export default function useLocalStorage(key: string, initialValue: unknown) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      window.addEventListener("storage", (ev) => {
        if (key === ev.key) {
          setStoredValue(ev.newValue);
        }
      });
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: (arg0: unknown) => unknown) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value(storedValue);
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
    }
  };

  return [storedValue, setValue];
}
