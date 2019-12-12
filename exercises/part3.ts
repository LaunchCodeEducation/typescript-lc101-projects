// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:

function getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * milesPerKilometer;
    let hours: number = milesAway / speedMph;
    let daysToMars: number = hours / 24;
    
    return daysToMars;

}

// Call the function and print the outputs for the Mars trip and the moon trip:
console.log(`It would take ${getDaysToLocation(kilometersToMars)} days in spacecraft ${spacecraftName} to get to Mars.`);
console.log(`It would take ${getDaysToLocation(kilometersToTheMoon)} days in spacecraftName ${spacecraftName} to get to the Moon.`);