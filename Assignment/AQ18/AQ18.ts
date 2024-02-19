//18. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Author: Muhammad Farhan
// Date: 15th Feb 2024
const places = ["Switzerland","Paris","London","Madagascar","Sydney"]; // Initialized a variable and stored values
console.log("Original Order: ",places,"\n"); //Original Order of the main vairable
const asort = [...places].sort(); //Sorting without changing the main variable
console.log("Alphabetical Order: ",asort,"\n"); //Printing the order
console.log("Original Order: ",places,"\n"); //Original Order of the main vairable
const rsort = [...places].sort(); //Sorting without changing the main variable
console.log("Reverse Alphabetical Order: ",rsort.reverse(),"\n"); //Printing the order
console.log("Original Order: ",places,"\n"); //Original Order of the main vairable
console.log("Reverse Order: ",places.reverse(),"\n"); //Reverse order of Original variable
console.log("Reverse Order again to make it Original: ",places.reverse(),"\n"); //Reverse order again of Original variable
console.log("Alphabetic Order: ",places.sort(),"\n"); //Sort the main variable
console.log("Reverse Alphabetic Order: ",places.reverse(),"\n"); //Reverse sort the main variable