// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Discovery";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hours = milesAway / speedMph;
    return hours / 24;
}
// Call the function and print the outputs for the Mars trip and the moon trip:
console.log(spacecraftName + " would take " + getDaysToLocation(kilometersToMars) + " to get to Mars.");
console.log(spacecraftName + " would take " + getDaysToLocation(kilometersToTheMoon) + " to get to the Moon.");
