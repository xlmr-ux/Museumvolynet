import { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

const getInitialState = (query, defaultState) => {
  // Prevent a React hydration mismatch when a default value is provided by not defaulting to window.matchMedia(query).matches.
  if (defaultState !== undefined) {
    return defaultState;
  }

  if (isBrowser) {
    return window.matchMedia(query).matches;
  }

  // A default value has not been provided, and you are rendering on the server, warn of a possible hydration mismatch when defaulting to false.
  if (process.env.NODE_ENV !== "production") {
    console.warn(
      "`useMedia` When server side rendering, defaultState should be defined to prevent a hydration mismatches."
    );
  }

  return false;
};

const useMedia = (query, defaultState) => {
  const [state, setState] = useState(() =>
    getInitialState(query, defaultState)
  );

  useEffect(() => {
    let isMounted = true;

    const matchMediaQuery = window.matchMedia(query);
    const onChange = () => {
      if (!isMounted) {
        return;
      }
      setState(!!matchMediaQuery.matches);
    };

    matchMediaQuery.addEventListener("change", onChange);
    setState(matchMediaQuery.matches);

    return () => {
      isMounted = false;
      matchMediaQuery.removeEventListener("change", onChange);
    };
  }, [query]);

  return state;
};

export default useMedia;
