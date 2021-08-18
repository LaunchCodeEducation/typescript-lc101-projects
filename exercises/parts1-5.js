"use strict";
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        var _this = this;
        this.milesPerKilometer = 0.621;
        this.getDaysToLocation = function (kilometersAway) {
            var milesAway = kilometersAway * _this.milesPerKilometer;
            var hoursToLocation = milesAway / _this.speedMph;
            var daysToLocation = hoursToLocation * 24;
            return daysToLocation;
        };
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft('Determination', 17500);
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation("Mars", kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation("the Moon", kilometersToTheMoon));
