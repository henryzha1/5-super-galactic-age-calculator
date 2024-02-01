import Galactic from './../src/galactic.js';

describe('Galactic', () => {
  let galactic;
  beforeEach(() => {
    galactic = new Galactic(10);
  });

  test('should create Galactic object with earthAge property', () => {
    expect(galactic.earthAge).toEqual(10);
  });
});