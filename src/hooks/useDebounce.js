import React, { useEffect, useRef, useState } from "react";

const useDebounce = (value, delay) => {
  const [debounceValue, setdebounceValue] = useState(value);
  const timeRef = useRef(null);

  useEffect(() => {
    function cleartimer() {
      clearTimeout(timeRef.current);
      timeRef.current = null;
    }
    clearTimeout();

    timeRef.current = setTimeout(() => {
      setdebounceValue(value);
    }, delay);
    return () => {
      cleartimer();
    };
  }, [value, delay]);
  return debounceValue;
};

export default useDebounce;
