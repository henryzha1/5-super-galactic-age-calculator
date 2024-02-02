export class Galactic {
  constructor(earthAge, year = 0) {
    this.earth = earthAge;
    this.mercury = parseFloat((earthAge/0.24).toFixed(2));
    this.venus = parseFloat((earthAge/0.62).toFixed(2));
    this.mars = parseFloat((earthAge/1.88).toFixed(2));
    this.jupiter = parseFloat((earthAge/11.86).toFixed(2));
    this.status = year && (earthAge - year !== 0) ? ((earthAge - year) > 0 ? "past" : "future") : "";
    this.difference = year && (earthAge - year != 0) ? {earth: parseFloat(Math.abs(earthAge - year)), mercury: parseFloat((Math.abs(earthAge - year)/0.24).toFixed(2)), venus: parseFloat((Math.abs(earthAge - year)/0.62).toFixed(2)), mars: parseFloat((Math.abs(earthAge - year)/1.88).toFixed(2)), jupiter: parseFloat((Math.abs(earthAge - year)/11.86).toFixed(2))} : "";
  }

  
}

// export function yearsUntil(currAge, year) {
//   let difference = currAge - year;
//   let galacticDifference = new Galactic(Math.abs(difference));
//   if(difference === 0) {
//     return 0;
//   } else if(difference < 0) {
//     galacticDifference.status = "future";
//   } else {
//     galacticDifference.status = "past";
//   }
//   return galacticDifference;
// }

