export class Galactic {
  constructor(earthAge) {
    this.earth = earthAge;
    this.mercury = parseFloat((earthAge/0.24).toFixed(2));
    this.venus = parseFloat((earthAge/0.62).toFixed(2));
    this.mars = parseFloat((earthAge/1.88).toFixed(2));
    this.jupiter = parseFloat((earthAge/11.86).toFixed(2));
  }

  
}

export function yearsUntil(currAge, year) {
  let startingIndex = -1;
  let difference = currAge - year;
  if(difference === 0) {
    return 0;
  } else if(difference < 0) {
    startingIndex = 1;
    difference = Math.abs(difference);
  } else {
    startingIndex = 0;
  }
  let galacticDifference = new Galactic(difference);
  return [startingIndex, galacticDifference.earth, galacticDifference.mercury, galacticDifference.venus, galacticDifference.mars, galacticDifference.jupiter];
}