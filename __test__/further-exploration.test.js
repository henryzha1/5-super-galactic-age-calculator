import { Galactic } from './../src/galactic.js';
import { daysUntilBirthday } from './../src/further-exploration.js';

describe('further-exploration', () => {
  test('should return number of days until last or next birthday on different planets', () => {
    expect(daysUntilBirthday(2,3)).toEqual(5);
  });


  
});