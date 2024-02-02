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
  let difference = currAge - year;
  let galacticDifference = new Galactic(Math.abs(difference));
  if(difference === 0) {
    return 0;
  } else if(difference < 0) {
    galacticDifference.status = "future";
  } else {
    galacticDifference.status = "past";
  }
  return galacticDifference;
}