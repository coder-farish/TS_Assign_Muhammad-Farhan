//35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Author: Muhammad Farhan
// Date: 18th Feb 2024
var animals = ["Dog", "Cat", "Parrot"]; //initialized variabe with values
for (var i = 0; i < animals.length; i++) { //1st loop for animals names only
    console.log(animals[i]);
}
console.log();
for (var i = 0; i < animals.length; i++) { //2nd loop for animals names with statement
    console.log("A", animals[i], "would make a great companion");
}
console.log("\nAll these animals can be great pets."); //displaying simple sentence
