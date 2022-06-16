// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// Part 2: Print Days to Mars
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft Class
var Spacescraft = /** @class */ (function () {
    function Spacescraft(name, speedMph) {
        this.milePerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacescraft.prototype.getDaysToLocation = function (kilometerAway) {
        var milesAway = kilometerAway * this.milePerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
    };
    return Spacescraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacescraft("Determination", 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log("".concat(spaceShuttle.name, " takes ").concat(spaceShuttle.getDaysToLocation(kilometersToMars), " days to Mars."));
console.log("".concat(spaceShuttle.name, " takes ").concat(spaceShuttle.getDaysToLocation(kilometersToTheMoon), " days to Moon."));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
