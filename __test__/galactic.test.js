import Galactic from './../src/galactic.js';

describe('Galactic', () => {
  let galactic;
  beforeEach(() => {
    galactic = new Galactic(10);
  });

  test('should create Galactic object with earthAge property', () => {
    expect(galactic.earthAge).toEqual(10);
  });
  test('should create Galactic object with age of other planets', () => {
    expect(galactic.mercuryAge).toEqual(41.67);
    expect(galactic.venusAge).toEqual(16.13);
    expect(galactic.marsAge).toEqual(5.32);
    expect(galactic.jupiteryAge).toEqual(0.84);
  });
});