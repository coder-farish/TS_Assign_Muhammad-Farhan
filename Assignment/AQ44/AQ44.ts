//44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Author: Muhammad Farhan
// Date: 19th Feb 2024

function sandwich(...items: string[]): void { //function of sandwhich with items
console.log("\nSandwich Order Summary:")
for (let i=0; i<items.length; i++) { //for loop to print the items
console.log(items[i]);
}
}
sandwich("Lettuce"); //call function for items of sandwich
sandwich("Lettuce", "Mayo");
sandwich("Lettuce", "Mayo", "Ketchup");