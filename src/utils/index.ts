import { RemainingTime } from "./types";

/**
 * Remaining time from the present until the endTime given.
 *
 * @param endTime - the time we're counting down until
 */
export const getRemainingTime = (endTime: Date): RemainingTime => {
  const now = new Date();

  let secondsRemaining = (endTime.getTime() - now.getTime()) / 1000;
  //don't count below zero
  if (secondsRemaining < 0) {
    secondsRemaining = 0;
  }

  const days = Math.floor(secondsRemaining / (60 * 60 * 24));
  const hours = Math.floor((secondsRemaining / (60 * 60)) % 24);
  const minutes = Math.floor((secondsRemaining / 60) % 60);
  const seconds = Math.floor(secondsRemaining % 60);

  return { days, hours, minutes, seconds };
};

/**
 * Returns a boolean repersenting if there is any time remaining
 */
export const isCountdownDone = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number
): boolean => {
  return days === 0 && hours === 0 && minutes === 0 && seconds === 0;
};
