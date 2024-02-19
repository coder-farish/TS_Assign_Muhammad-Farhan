//44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Author: Muhammad Farhan
// Date: 19th Feb 2024
//function make_sandwich(...items: string[]): void {
//  console.log("Sandwich order:");
//  for (let i = 0; i < items.length; i++) {
//   console.log(`- ${items[i]}`);
// }
// console.log("Enjoy your sandwich!");
// }
// make_sandwich('lettuce', 'tomato', 'cheese');
// make_sandwich('ham', 'mayo');
// make_sandwich('turkey');
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nSandwich Order Summary:");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
sandwich("Lettuce");
sandwich("Lettuce", "Mayo");
sandwich("Lettuce", "Mayo", "Ketchup");
