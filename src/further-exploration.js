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

export function mayflyLifespans(birthday, today) {
  let minutesDifference = daysUntilNextBirthday(birthday,today).earth*24*60;
  return minutesDifference/5;
}

export function sunLifespans(birthday, today) {
  let dayOfBirthday = birthday.getTime()/1000/60/60/24/365;
  let dayOfToday = today.getTime()/1000/60/60/24/365;

  let yearsDifference = new Galactic(dayOfBirthday, dayOfToday);
  return parseFloat((4600000000/parseFloat((yearsDifference.difference.earth).toFixed(2))).toFixed(2));
}