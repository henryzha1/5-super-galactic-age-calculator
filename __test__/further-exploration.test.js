import { Galactic } from './../src/galactic.js';
import { daysUntilNextBirthday, dogAgeOnJupiterIn2073 } from './../src/further-exploration.js';

describe('further-exploration', () => {
  test('should return number of days until last or next birthday on different planets', () => {
    const galactic = new Galactic(10,5);
    const birthday = new Date('2024-02-10');
    const day = new Date('2024-02-05');
    expect(daysUntilNextBirthday(birthday,day)).toEqual(galactic.difference);
  });

  test('should return number of days until last or next birthday on different planets', () => {
    const birthday = new Date('1999-06-30');
    expect(dogAgeOnJupiterIn2073(birthday)).toEqual(43.42);
  });



});