// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Discovery";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Part 3 - Define the 'getDaysToLocation' function here:
function getDaysToLocation(kilometersAway: number): number {
  let milesAway: number = kilometersAway * milesPerKilometer;
  let hours: number = milesAway / speedMph;
  return hours / 24;
}

// Call the function and print the output here:
console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToMars)} to get to Mars.`);