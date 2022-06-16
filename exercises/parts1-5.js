"use strict";
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
// let spacecraftName: string = 'Determination';
// let speedMph: number = 17500;
// let kilometersToMars: number = 225000000;
var kilometersToTheMoon = 384400;
// let milesPerKilometer: number = 0.621;
// Part 2: Print Days to Mars
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;
// Code an output statement here (use a template literal):
// console.log(`It will take ${spacecraftName} ${daysToMars} days to get to Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway: number): number {
//     let milesAway: number = kilometersAway * milesPerKilometer;
//     let hours: number = milesAway / speedMph;
//     return hours / 24;
// }
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);
// console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft('Determination', 12500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`It will take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to Moon.`);
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
