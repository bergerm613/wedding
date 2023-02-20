type RemainingTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// Date object for the shkiya start time of Purim 2023
export const purimDate = new Date("03/06/2023 17:52:41");

/**
 * Remaining time from the present until the endTime given.
 *
 * @param endTime - the time we're counting down until
 */
export const getRemainingTime = (endTime: Date): RemainingTime => {
  const now = new Date();
  const secondsRemaining = (endTime.getTime() - now.getTime()) / 1000;

  const days = Math.floor(secondsRemaining / (60 * 60 * 24));
  const hours = Math.floor((secondsRemaining / (60 * 60)) % 24);
  const minutes = Math.floor((secondsRemaining / 60) % 60);
  const seconds = Math.floor(secondsRemaining % 60);

  return { days, hours, minutes, seconds };
};
