export const handleStartClick = (setIsRunning) => {
  setIsRunning(true);
};

export const handlePauseClick = (setIsRunning) => {
  setIsRunning(false);
};

export const handleResetClick = (
  setHours,
  setMinutes,
  setSeconds,
  setIsRunning
) => {
  setHours(0);
  setMinutes(0);
  setSeconds(0);
  setIsRunning(false);
};

// Как сделать так, чтобы шло "00" ... "09", то есть в моей голове это выглядит так "`0 + ${numSecond}`"
