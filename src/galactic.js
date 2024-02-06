export class Galactic {
  constructor(earthAge) {
    this.earth = earthAge;
    this.mercury = parseFloat((earthAge/0.24).toFixed(2));
    this.venus = parseFloat((earthAge/0.62).toFixed(2));
    this.mars = parseFloat((earthAge/1.88).toFixed(2));
    this.jupiter = parseFloat((earthAge/11.86).toFixed(2));
  }
    
  getDifference(year) {
    // status indicates future or past age
    this.status = year && (this.earth - year !== 0) ? ((this.earth - year) > 0 ? "past" : "future") : "";
    // difference contains object of key value pairs planet: time passed
    this.difference = year && (this.earth - year != 0) ? {earth: parseFloat(Math.abs(this.earth - year)), mercury: parseFloat((Math.abs(this.earth - year)/0.24).toFixed(2)), venus: parseFloat((Math.abs(this.earth - year)/0.62).toFixed(2)), mars: parseFloat((Math.abs(this.earth - year)/1.88).toFixed(2)), jupiter: parseFloat((Math.abs(this.earth - year)/11.86).toFixed(2))} : "";
  }
  
}
