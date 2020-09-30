import {useCallback, useRef, useState} from 'react';

const DEFAULT_DEBOUNCE_TIMEOUT = 800;

const useDebouncedState = <T>(
  initialState: T,
  debounceTimeout = DEFAULT_DEBOUNCE_TIMEOUT
) => {
  const [normalValue, setNormalValue] = useState(initialState);
  const [debouncedValue, setDebouncedValue] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const timeoutRef = useRef<number | null>();

  const setValues = useCallback(
    newValue => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setNormalValue(newValue);
      setIsLoading(true);

      timeoutRef.current = setTimeout(() => {
        setDebouncedValue(newValue);
        setIsLoading(false);
      }, debounceTimeout);
    },
    [timeoutRef, debounceTimeout]
  );

  return {
    value: normalValue,
    debounced: debouncedValue,
    setValues,
    isLoading
  };
};

export default useDebouncedState;
