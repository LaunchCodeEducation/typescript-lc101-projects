"use strict";
// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html
exports.__esModule = true;
// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.
var Astronaut_1 = require("./Astronaut");
var Cargo_1 = require("./Cargo");
var Rocket_1 = require("./Rocket");
var falcon9 = new Rocket_1.Rocket('Falcon 9', 7500);
var astronauts = [
    new Astronaut_1.Astronaut(75, 'Mae'),
    new Astronaut_1.Astronaut(81, 'Sally'),
    new Astronaut_1.Astronaut(99, 'Charles')
];
for (var i = 0; i < astronauts.length; i++) {
    var astronaut = astronauts[i];
    var status_1 = '';
    if (falcon9.addAstronaut(astronaut)) {
        status_1 = "On board";
    }
    else {
        status_1 = "Not on board";
    }
    console.log("".concat(astronaut.name, ": ").concat(status_1));
}
var cargo = [
    new Cargo_1.Cargo(3107.39, "Satellite"),
    new Cargo_1.Cargo(1000.39, "Space Probe"),
    new Cargo_1.Cargo(753, "Water"),
    new Cargo_1.Cargo(541, "Food"),
    new Cargo_1.Cargo(2107.39, "Tesla Roadster"),
];
for (var i = 0; i < cargo.length; i++) {
    var c = cargo[i];
    var loaded = '';
    if (falcon9.addCargo(c)) {
        loaded = "Loaded";
    }
    else {
        loaded = "Not loaded";
    }
    console.log("".concat(c.material, ": ").concat(loaded));
}
console.log("Final cargo and astronaut mass: ".concat(falcon9.currentMassKg(), " kg."));
