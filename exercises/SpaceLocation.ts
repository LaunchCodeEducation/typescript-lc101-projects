// Paste in the provided code here:
export class SpaceLocation {
    kilometersAway: number;
    name: string;

    constructor(name: string, kilometersAway: number) {
        this.name = name;
        this.kilometersAway = kilometersAway;
    }
    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}