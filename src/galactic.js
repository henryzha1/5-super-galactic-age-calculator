export default class Galactic {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = parseFloat((earthAge/0.24).toFixed(2));
    this.venusAge = parseFloat((earthAge/0.62).toFixed(2));
    this.marsAge = parseFloat((earthAge/1.88).toFixed(2));
    this.jupiterAge = parseFloat((earthAge/11.86).toFixed(2));

  }

  yearsUntil(year) {
    return 0;
  }
}


