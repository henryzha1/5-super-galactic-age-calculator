import { Galactic, yearsUntil } from './../src/galactic.js';

describe('Galactic', () => {
  let galactic;
  beforeEach(() => {
    galactic = new Galactic(10);
  });

  test('should create Galactic object with earthAge property', () => {
    expect(galactic.earth).toEqual(10);
  });
  test('should create Galactic object with age of other planets', () => {
    expect(galactic.mercury).toEqual(41.67);
    expect(galactic.venus).toEqual(16.13);
    expect(galactic.mars).toEqual(5.32);
    expect(galactic.jupiter).toEqual(0.84);
  });
  test('should return 0 given same year in years from function', () => {
    expect(yearsUntil(galactic.earth, 10)).toEqual(0);
  });
  test('should return an array of years until given year on earth and different planets with index 0 being 0 for past date and 1 for future date', () => {
    expect(yearsUntil(galactic.earth, 15)).toEqual([1,5,20.83,8.06,2.66,0.42]);
    expect(yearsUntil(galactic.earth, 5)).toEqual([0,5,20.83,8.06,2.66,0.42]);
  });
});