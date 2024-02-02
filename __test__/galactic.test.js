import { Galactic, yearsUntil } from './../src/galactic.js';
import { daysUntilBirthday } from './../src/further-exploration.js';

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
    let newGalactic = new Galactic(10,10);
    expect(newGalactic.difference).toEqual("");
  });
  test('should return future for future age and past for past age', () => {
    const galacticfutureDifference = new Galactic(5, 10);
    const galacticpastDifference = new Galactic(10, 5);
    expect(galacticfutureDifference.status).toEqual("future");
    expect(galacticpastDifference.status).toEqual("past");
  });
  test('should return an object with key-value pairs of [planet] = age difference converted', () => {
    const galacticfutureDifference = new Galactic(5, 10);
    const galacticpastDifference = new Galactic(10, 5);
    expect(galacticfutureDifference.difference).toEqual("future");
    expect(galacticpastDifference.difference).toEqual("past");
  });

  // //further exploration
  // test('should return number of days until last or next birthday on different planets', () => {
  //   expect(daysUntilBirthday(2,3)).toEqual(5);
  // });
});