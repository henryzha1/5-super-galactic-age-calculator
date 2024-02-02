import { Galactic } from './galactic.js';

export function daysUntilNextBirthday(birthday, day) {
  let dayOfBirthday = birthday.getTime()/1000/60/60/24;
  let dayOfDay = day.getTime()/1000/60/60/24;

  let galactic = new Galactic(dayOfBirthday,dayOfDay);
  return galactic.difference;
}

export function dogAgeOnJupiterIn2073(birthday) {
  let day = new Date("2073-01-01");

  let daysUntil = new Galactic((daysUntilNextBirthday(birthday,day).earth/365).toFixed(2)*7);
  return daysUntil.jupiter;
}