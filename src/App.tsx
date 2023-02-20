import * as React from "react";
import { useState, useEffect } from "react";
import { Flipper } from "./components/Flipper";
import { getRemainingTime, purimDate } from "./util";

import "./styles.css";

const App = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateTime = () => {
    const remainingTime = getRemainingTime(purimDate);

    setDays(remainingTime.days);
    setHours(remainingTime.hours);
    setMinutes(remainingTime.minutes);
    setSeconds(remainingTime.seconds);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <h1 className="title">PURIM IS A'COMIN</h1>

      <div className="flippers-container">
        <Flipper amount={days} subtitle={"days"} />
        <Flipper amount={hours} subtitle={"hours"} />
        <Flipper amount={minutes} subtitle={"minutes"} />
        <Flipper amount={seconds} subtitle={"seconds"} />
      </div>
    </div>
  );
};

export default App;
