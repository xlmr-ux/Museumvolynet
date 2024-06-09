import { useEffect, useState } from "react";
import { Box } from "@mui/joy";

const useTyping = (
  words,
  waitingTimeout = 2000,
  typingTimeout = 500,
  cursor = "_",
  typingOnce = false
) => {
  const [deleting, setDeleting] = useState(true);
  const [waiting, setWaiting] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false); // New state to track if animation completed

  const [value, setValue] = useState(words[0]);
  const [word, setWord] = useState(words[0]);
  const [, setRemainingWords] = useState(words.slice(1));

  useEffect(() => {
    if (typingOnce && animationCompleted) return; // If typingOnce is true and animation completed, do not continue

    const typingTimeoutFunc = setTimeout(() => {
      // If the state is deleting, we remove one char from the value.
      // Otherwise, the value taken is the word with the given length.
      setValue((prev) =>
        deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
      );

      // If the value is empty and is deleting, we remove one word
      // from the remaining words list if the list is not empty,
      // otherwise, we set the remaining words list as the words
      // with the first element removed (because it sets it directly).
      if (value.length === 0 && deleting === true) {
        setRemainingWords((prevRemainingWords) => {
          const isThereRemainingWords = prevRemainingWords.length > 0;

          setWord(isThereRemainingWords ? prevRemainingWords[0] : words[0]);

          return isThereRemainingWords
            ? prevRemainingWords.slice(1)
            : words.slice(1);
        });

        setDeleting(false);
      }

      if (value === word) {
        setDeleting(true);
        if (typingOnce) setAnimationCompleted(true); // If typingOnce, set animation completed after the word is typed
      }

      // If the next iteration is the word, we set the waiting property
      // to true, otherwise, if it is waiting, we disable the waiting
      if (value === word.slice(0, -1) && !deleting) {
        setWaiting(true);
      } else if (value === word && !deleting) {
        setWaiting(false);
      }
    }, [waiting ? waitingTimeout : typingTimeout]);

    return () => {
      clearTimeout(typingTimeoutFunc);
    };
  }, [deleting, value]);

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ opacity: 0 }}>
        {word}
        {cursor}
      </Box>

      <Box sx={{ position: "absolute", top: "0", left: "0" }}>
        {value}
        <Box
          sx={{
            "@keyframes blink": {
              "0%": {
                opacity: 1,
              },
              "50%": {
                opacity: 0,
              },
              "100%": {
                opacity: 1,
              },
            },
            animation: "blink 0.9s infinite",
          }}
        >
          {cursor}
        </Box>
      </Box>
    </Box>
  );
};

export default useTyping;
