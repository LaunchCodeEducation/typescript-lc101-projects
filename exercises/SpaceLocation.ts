export class SpaceLocation {
    kilometersAway: number;
    name: string;

    constructor(name: string, kilometersAway: number) {
        this.name = name;
        this.kilometersAway = kilometersAway;
    }
}