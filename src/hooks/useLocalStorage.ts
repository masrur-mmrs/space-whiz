'use client'
import { useState, useEffect } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T | null>(null);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        try {
          const item = window.localStorage.getItem(key);
          if (item) {
            setStoredValue(JSON.parse(item));
          } else {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
            setStoredValue(initialValue);
          }
        } catch (error) {
          console.error(`Error reading localStorage key "${key}":`, error);
          setStoredValue(initialValue);
        }
        setHydrated(true);
    }, [key, initialValue]);

    const setValue = (value: T | ((val: T) => T)) => {
        setStoredValue((prev) => {
            const valueToStore = value instanceof Function ? value(prev as T) : value;
            try {
              window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (error) {
              console.error(`Error setting localStorage key "${key}":`, error);
            }
            return valueToStore;
        });
    };

    return [hydrated ? storedValue : initialValue, setValue, hydrated] as const;
};

export default useLocalStorage;