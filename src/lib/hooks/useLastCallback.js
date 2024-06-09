import { useCallback, useLayoutEffect, useRef } from "react";

const useLastCallback = (callback) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    ref.current = callback;
  }, []);

  return useCallback((...args) => {
    const lastCallback = ref.current;

    if (lastCallback) {
      lastCallback(...args);
    }
  }, []);
};

export default useLastCallback;
