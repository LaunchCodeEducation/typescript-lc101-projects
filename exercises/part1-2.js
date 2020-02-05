"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
// Part 5: Add import statement here:
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Add the 5 variables here
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
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
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Print two outputs - one for the trip to Mars and one for the trip to the moon.
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
