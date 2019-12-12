// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Space Shuttle";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersToMars * milesPerKilometer;
    var hours = milesAway / speedMph;
    var daysToMars = hours / 24;
}
// Call the function and print the outputs for the Mars trip and the moon trip:
console.log("It would take " + getDaysToLocation(kilometersToMars) + " days in spacecraft " + spacecraftName + " to get to Mars.");
console.log("It would take " + getDaysToLocation(kilometersToTheMoon) + " days in spacecraftName " + spacecraftName + " to get to the Moon.");
