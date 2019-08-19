// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html

import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Rocket } from './Rocket';

let falcon9: Rocket = new Rocket('Falcon 9', 7500);

let astronauts: Astronaut[] = [
   new Astronaut(75, 'Mae'),
   new Astronaut(81, 'Sally'),
   new Astronaut(99, 'Charles')
];

for (let i =0; i < astronauts.length; i++) {
   let astronaut = astronauts[i];
   console.log(astronaut.name, falcon9.addAstronaut(astronaut));
}

let cargo: Cargo[] = [
   new Cargo(3107.39, "Satellite"),
   new Cargo(1000.39, "Space Probe"),
   new Cargo(753, "Water"),
   new Cargo(541, "Food"),
   new Cargo(2107.39, "Tesla Roadster"),
];

for (let i =0; i < cargo.length; i++) {
   let c = cargo[i];
   console.log(c.material, falcon9.addCargo(c));
}

console.log(`Final cargo and astronaut mass: ${falcon9.currentMassKg()} kg.`);

