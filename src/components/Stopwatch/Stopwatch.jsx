import s from "./Stopwatch.module.scss";
import Button from "../common/Button/Button";
import StopwatchItem from "./StopwatchItem/StopwatchItem";
import {
  handlePauseClick,
  handleResetClick,
  handleStartClick,
} from "../../functions/buttonClick";
import { useContext, useState } from "react";
import { AppContext } from "../../provider/provider";

export default function Stopwatch() {
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

  return (
    <div className={s.container}>
      <h1 className={s.heading}>Секундомер</h1>
      <StopwatchItem />
      <div className={s.button_container}>
        {!isRunning ? (
          <Button
            handleClick={() => handleStartClick(setIsRunning)}
            name="Старт"
          />
        ) : (
          <Button
            handleClick={() => handlePauseClick(setIsRunning)}
            name="Пауза"
          />
        )}
        <Button
          handleClick={() =>
            handleResetClick(setHours, setMinutes, setSeconds, setIsRunning)
          }
          name="Сброс"
        />
      </div>
    </div>
  );
}
