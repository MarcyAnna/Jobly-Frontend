import { useState } from "react";

function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  // useEffect(() => {
  //   localStorage.setItem(key, JSON.stringify(value));
  // }, [key, value]);
  // console.log("hi",key, value);
  // return [value, setValue];
  const setStoredValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  }
  return [value, setStoredValue];

}; 

