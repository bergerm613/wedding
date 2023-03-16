import * as React from "react";

import { Flipper } from "./components/Flipper";
import { isCountdownDone } from "./utils";
import Confetti from "react-confetti";
import { useCountdown } from "./hooks/useCountdown";

import "./styles.css";

const weddingDate = new Date(2023, 3, 19, 5, 0); // April 19, 2023 - 6:00 PM

const App = () => {
  const { days, hours, minutes, seconds } = useCountdown(weddingDate);
  return (
    <>
      {isCountdownDone(days, hours, minutes, seconds) && <Confetti />}

      <div className="countdown-container">
        <h1 className="title">Leah and Naftali Wedding Countdown!!</h1>

        <div className="flippers-container">
          <Flipper amount={days} subtitle={"days"} />
          <Flipper amount={hours} subtitle={"hours"} />
          <Flipper amount={minutes} subtitle={"minutes"} />
          <Flipper amount={seconds} subtitle={"seconds"} />
        </div>
      </div>
    </>
  );
};

export default App;
