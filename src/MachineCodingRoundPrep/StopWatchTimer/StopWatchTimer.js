import React, { useState } from "react";
import style from "./StopWatchTimer.module.css";

function StopWatchTimer() {
  const [currentState, setCurrentState] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [time, setTime] = useState(new Date());
  const [hour, minute, second] = [
    time.getHours(),
    time.getMinutes(),
    time.getSeconds(),
  ];
  function handleState(e) {
    const cState = Number(e.target.dataset.index);
    if (cState === 1) {
      const id = setInterval(() => {
        time.setSeconds(time.getSeconds() - 1);
        setTime(new Date(time));
      }, 1000);
      setIntervalId(id);
    } else if (cState === 2) {
      clearInterval(intervalId);
    } else if (cState === 0) {
      setTime(new Date());
    }
    setCurrentState(cState);
  }

  return (
    <div className={style.container}>
      <div className={style.heading}>StopWatchTimer</div>
      <div className={style.timerContainer}>
        <div className={style.block}>
          <div>Hours</div>
          {currentState === 0 ? (
            <input
              onChange={(e) =>
                setTime(
                  e.target.value < 24
                    ? new Date(time.setHours(e.target.value))
                    : new Date(time.setHours(24))
                )
              }
            />
          ) : (
            <div>{hour < 10 ? `0${hour}` : hour}</div>
          )}
        </div>
        <div>:</div>
        <div className={style.block}>
          <div>Minutes</div>
          {currentState === 0 ? (
            <input
              onChange={(e) =>
                setTime(
                  e.target.value < 60
                    ? new Date(time.setMinutes(e.target.value))
                    : new Date(time.setMinutes(60))
                )
              }
            />
          ) : (
            <div>{minute < 10 ? `0${minute}` : minute}</div>
          )}
        </div>
        <div>:</div>
        <div className={style.block}>
          <div>Seconds</div>
          {currentState === 0 ? (
            <input
              onChange={(e) =>
                setTime(
                  e.target.value < 60
                    ? new Date(time.setSeconds(e.target.value))
                    : new Date(time.setSeconds(60))
                )
              }
            />
          ) : (
            <div>{second < 10 ? `0${second}` : second}</div>
          )}
        </div>
      </div>
      <div onClick={handleState} className={style.button}>
        {currentState === 0 && <button data-index="1">Start</button>}
        {currentState === 2 && <button data-index="1">Resume</button>}
        {currentState === 1 && <button data-index="2">Pause</button>}
        <button data-index="0">Reset</button>
      </div>
    </div>
  );
}

export default StopWatchTimer;
