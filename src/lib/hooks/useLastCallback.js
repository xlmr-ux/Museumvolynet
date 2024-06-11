import { useCallback, useLayoutEffect, useRef } from "react";

const useLastCallback = (callback) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    ref.current = callback;
  }, []);

  return useCallback((...args) => ref.current?.(...args), []);
};

export default useLastCallback;
