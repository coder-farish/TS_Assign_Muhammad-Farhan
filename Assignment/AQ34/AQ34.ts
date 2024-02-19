//34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
const pizza = ["Fajita", "Creamy", "BBQ"]; //initialized variabe with values
for (let i = 0; i < pizza.length; i++) { //1st loop for pizza names only
console.log(pizza[i]);
}
console.log();
for (let i = 0; i < pizza.length; i++) { //2nd loop for pizza names with statement
    console.log("I like",pizza[i],"Pizza");
    }
console.log("\nI am in love with Pizza!") //displaying simple sentence