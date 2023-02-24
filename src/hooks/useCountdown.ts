import { useEffect, useState } from "react";
import { RemainingTime } from "../utils/types";
import { getRemainingTime } from "../utils";

/**
 * A hook used to continuously check the remaining time, and update every second.
 *
 * @param {Date} endTime the Date to count down until
 * @returns {RemainingTime} days, hours, minutes, and seconds remaining
 */
export const useCountdown = (endTime: Date): RemainingTime => {
  const [days, setDays] = useState<number>(undefined);
  const [hours, setHours] = useState<number>(undefined);
  const [minutes, setMinutes] = useState<number>(undefined);
  const [seconds, setSeconds] = useState<number>(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = getRemainingTime(endTime);

      setDays(remainingTime.days);
      setHours(remainingTime.hours);
      setMinutes(remainingTime.minutes);
      setSeconds(remainingTime.seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return { days, hours, minutes, seconds };
};
