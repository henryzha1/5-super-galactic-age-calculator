export class Galactic {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = parseFloat((earthAge/0.24).toFixed(2));
    this.venusAge = parseFloat((earthAge/0.62).toFixed(2));
    this.marsAge = parseFloat((earthAge/1.88).toFixed(2));
    this.jupiterAge = parseFloat((earthAge/11.86).toFixed(2));
  }

  
}

export function yearsUntil(galactic, year) {
  let startingIndex = -1;
  let difference = galactic.earthAge - year;
  if(difference === 0) {
    return 0;
  } else if(difference < 0) {
    startingIndex = 1;
    difference = Math.abs(difference);
  } else {
    startingIndex = 0;
  }
  let galacticDifference = new Galactic(difference);
  return [startingIndex, galacticDifference.earthAge, galacticDifference.mercuryAge, galacticDifference.venusAge, galacticDifference.marsAge, galacticDifference.jupiterAge];
}