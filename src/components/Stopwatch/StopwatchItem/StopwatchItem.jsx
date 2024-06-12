import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../provider/provider";
import s from "./StopwatchItem.module.scss";

export default function StopwatchItem() {
  const {
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    hours,
    setHours,
    isRunning,
    setIsRunning,
  } = useContext(AppContext);
  let format = (unit) => (unit < 10 ? `0${unit}` : unit);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer); // Очищаем интервал при остановке таймера или размонтировании компонента
  }, [isRunning]);

  return (
    <div className={s.timer}>{`${format(hours)}:${format(minutes)}:${format(
      seconds
    )}`}</div>
  );
}
