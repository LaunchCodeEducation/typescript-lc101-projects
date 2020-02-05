// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 1: Add the 5 variables here

let spacecraftName: string = "Determination";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;


// Code part 2 here:
let milesToMars: number = kilometersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars/speedMph;
let daysToMars: number = hoursToMars/24;

// Code the output statement here (use a template literal):
console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);


// Part 3:
// Code the "getDaysToLocation" function here:





// Call the function and print the outputs for the Mars trip and the moon trip:

