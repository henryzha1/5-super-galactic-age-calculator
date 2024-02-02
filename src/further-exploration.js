import { Galactic } from './galactic.js';

export function daysUntilNextBirthday(birthday, day) {
  let dayOfBirthday = birthday.getTime()/1000/60/60/24;
  let dayOfDay = day.getTime()/1000/60/60/24;

  let galactic = new Galactic(dayOfBirthday,dayOfDay);
  return galactic.difference;
}

export function dogAgeOnJupiterIn2073(birthday) {
  return 0;
}