//26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
//Case 1: Green Color
var alien_color = "green";
console.log("Case 1: Alien has green color");
if (alien_color === "green") {
    console.log("Player has just earned 5 points for shooting the ALIEN!");
}
//Case 2: Red color
var alien_colorv1 = "red";
console.log("\nCase 2: Alien does not have green color");
if (alien_colorv1.valueOf() !== "green") {
    console.log("Player has just earned 10 points!");
}
//Case 3: If and Else Block
var alien_colorv2 = "green";
console.log("\nCase 3: If & Else Block Statements:");
if (alien_colorv2.valueOf() == "green") {
    console.log("Player has just earned 5 points for shooting the ALIEN!");
}
else {
    console.log("Player has just earned 10 points!");
}
