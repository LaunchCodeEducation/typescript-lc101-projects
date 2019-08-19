var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// Define your Spacecraft class here:
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Discovery', 17500);
// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log(spaceShuttle.name + " would take " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days to get to Mars.");
console.log(spaceShuttle.name + " would take " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " days to get to Mars.");
