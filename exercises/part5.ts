// Add your import statement to line 2:
import { SpaceLocation } from './SpaceLocation';

let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor (name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hours: number = milesAway / this.speedMph;
        return hours / 24;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}

// Create an instance of Spacecraft:
let spaceShuttle = new Spacecraft('Discovery', 17500);

// Print the output for the trips to Mars and the moon:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
