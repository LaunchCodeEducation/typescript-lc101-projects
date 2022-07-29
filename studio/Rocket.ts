import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

export class Rocket {

  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor (name: string, totalCapacityKg: number) { 
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass( items: Payload[] ): number {

    let totalMass = 0;

    for (let i: number = 0; i < items.length; i++){
      totalMass += items[i].massKg;
    } 

    return totalMass;
  }

  currentMassKg(): number {
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
  }

  canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  addCargo(cargo: Cargo): boolean {
    if (!this.canAdd(cargo)) {
      return false;
    } 
    
    this.cargoItems.push(cargo);
    return true;
  }

  addAstronaut(astronaut: Astronaut): boolean{

    if (!this.canAdd(astronaut)) {
      return false;
    }

    this.astronauts.push(astronaut);
      return true;
    
  }

}