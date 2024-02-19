//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
//Case 1: Green Color
const alien_color = "green";
console.log("Case 1: Alien is Green");
if (alien_color === "green") {
    console.log("Player has just earned 5 points!")
}
else if (alien_color === "yellow") {
    console.log("Player has just earned 10 points!")
}
else if (alien_color === "red") {
    console.log("Player has just earned 15 points!")
}

//Case 2: Yellow Color
const alien_color2 = "yellow";
console.log("\nCase 2: Alien is Yellow");
if (alien_color2.valueOf() === "green") {
    console.log("Player has just earned 5 points!")
}
else if (alien_color2 === "yellow") {
    console.log("Player has just earned 10 points!")
}
else if (alien_color2 === "red") {
    console.log("Player has just earned 15 points!")
}

//Case 3: Red Color
const alien_color3 = "red";
console.log("\nCase 3: Alien is Red");
if (alien_color3.valueOf() === "green") {
    console.log("Player has just earned 5 points!")
}
else if (alien_color3.valueOf() === "yellow") {
    console.log("Player has just earned 10 points!")
}
else if (alien_color3 === "red") {
    console.log("Player has just earned 15 points!")
}