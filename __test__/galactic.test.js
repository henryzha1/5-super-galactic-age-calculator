import { Galactic } from './../src/galactic.js';

describe('Galactic', () => {
  let galactic;
  beforeEach(() => {
    galactic = new Galactic(10);
  });

  test('should create Galactic object with earth property', () => {
    expect(galactic.earth).toEqual(10);
  });
  test('should create Galactic object with age of other planets', () => {
    expect(galactic.mercury).toEqual(41.67);
    expect(galactic.venus).toEqual(16.13);
    expect(galactic.mars).toEqual(5.32);
    expect(galactic.jupiter).toEqual(0.84);
  });
  test('should return 0 given same year in years from function', () => {
    galactic.getDifference(10);
    expect(galactic.difference).toEqual("");
  });
  test('should return future for future age', () => {
    galactic.getDifference(15);
    expect(galactic.status).toEqual("future");
  });
  test('should return past for past age', () => {
    galactic.getDifference(5);
    expect(galactic.status).toEqual("past");
  });
  test('should return an object with key-value pairs of [planet] = age difference converted', () => {
    galactic.getDifference(15);
    expect(galactic.difference).toEqual({earth: 5, mercury: 20.83, venus: 8.06, mars: 2.66, jupiter: 0.42});
  });

});