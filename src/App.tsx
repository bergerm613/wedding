import * as React from "react";
import { useEffect, useState } from "react";

import { Flipper } from "./components/Flipper";
import { isCountdownDone } from "./utils";
import Confetti from "react-confetti";
import { useCountdown } from "./hooks/useCountdown";
import { getHebcalSunset } from "./utils/apis";

import * as ReactGA from "react-ga";

import "./styles.css";

const TRACKING_ID = "G-RY476C5WV6";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  const [purimStartDate, setPurimStartDate] = useState<Date>();
  const { days, hours, minutes, seconds } = useCountdown(purimStartDate);

  useEffect(() => {
    const geoname = "5128581"; //geoname of New York City

    getHebcalSunset(geoname).then((sunset) => {
      setPurimStartDate(sunset);
    });
  }, []);

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
