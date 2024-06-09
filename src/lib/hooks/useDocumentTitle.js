import { useRef } from "react";
import { useIsomorphicEffect } from "./useIsomorphicEffect";

export function useDocumentTitle(title) {
  const prevTitle = useRef(document.title);

  useIsomorphicEffect(() => {
    if (typeof title === "string" && title.trim().length > 0) {
      const newTitle = title.trim();
      if (newTitle !== prevTitle.current) {
        document.title = newTitle;
        prevTitle.current = newTitle;
      }
    } else {
      prevTitle.current = "";
    }
  }, [title]);
}
