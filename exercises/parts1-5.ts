import { SpaceLocation } from './SpaceLocation'

let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

class Spacecraft {

    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number,) {
        this.name = name;
        this.speedMph = speedMph;

    }

    getDaysToLocation = (kilometersAway: number): number => {

        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursToLocation: number = milesAway / this.speedMph;
        let daysToLocation: number = hoursToLocation * 24;
        return daysToLocation;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}

let spaceShuttle = new Spacecraft('Determination', 17500);

spaceShuttle.printDaysToLocation(new SpaceLocation("Mars", kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation("the Moon", kilometersToTheMoon));

