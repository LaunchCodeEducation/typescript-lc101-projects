// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 5: Import statement.
import { SpaceLocation } from './SpaceLocation';

// Part 1: Remaining variables.
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

// Part 2: Content moved into class. Output statements updated.


// Part 3: Content moved into class. Output statements updated.


// Part 4: Define your Spacecraft class:

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

// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);


// Part 5: Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));