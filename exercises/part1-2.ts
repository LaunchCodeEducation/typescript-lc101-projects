// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 5: Add import statement here:
import { SpaceLocation } from './SpaceLocation';

// Part 1: Add the 5 variables here

let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

// Code part 2 here:


// Code the output statement here (use a template literal):



// Part 3:
// Code the "getDaysToLocation" function here:


// Call the function and print the outputs for the Mars trip and the moon trip:


// Part 4:
/* Move the variables spacecraftName, speedMph, and milesPerKilometer into the
    Spacecraft class. Also move your getDaysToLocation function into the Spacecraft
    class. */

// Define your Spacecraft class here:
class Spacecraft {
    name: string;
    speedMph: number;
    milesPerKilometer: number = 0.621;

    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursToLocation: number = milesAway/this.speedMph;
        
        return hoursToLocation/24;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }

}

// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500)


// Print two outputs - one for the trip to Mars and one for the trip to the moon.
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
