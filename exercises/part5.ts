// Add your import statement here:


// let kilometersToMars: number = 225000000;
// let kilometersToTheMoon: number = 384400;

class Spacecraft {
  milesPerKilometer: number = 0.621;
  name: string;
  speedMph: number;

  constructor(name: string, speedMph: number) {
    this.name = name;
    this.speedMph = speedMph;
  }

  getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * this.milesPerKilometer;
    let hours: number = milesAway / this.speedMph;
    return hours / 24;
  }

  // Add the printDaysToLocation function here.

}

// Paste in the code from step 6 here:
