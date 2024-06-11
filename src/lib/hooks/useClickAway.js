import { useEffect } from "react";

const useClickAway = (ref, cb) => {
  const handleClickAway = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      cb(event);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickAway);

    return () => {
      document.removeEventListener("click", handleClickAway);
    };
  });
};

export default useClickAway;
