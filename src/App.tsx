import * as React from "react";
import { Flipper } from "./components/Flipper";
import { isCountdownDone, purimDate } from "./util";
import Confetti from "react-confetti";
import { useCountdown } from "./hooks/useCountdown";

import "./styles.css";

const App = () => {
  const { days, hours, minutes, seconds } = useCountdown(purimDate);

  return (
    <>
      {isCountdownDone(days, hours, minutes, seconds) && <Confetti />}

      <div className="countdown-container">
        <h1 className="title">Purim 2023 Let's Goooo</h1>

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
