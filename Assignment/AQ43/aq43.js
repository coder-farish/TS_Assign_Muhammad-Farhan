//43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
var mnames = ["David Copperfield", "Harry Houdini", "David Blaine", "Teller"]; //initialized array with variables
function show_magicians(mnames) {
    for (var i = 0; i < mnames.length; i++) {
        console.log(mnames[i]);
    }
}
function make_great(mnames) {
    var mnames2 = [];
    for (var i = 0; i < mnames.length; i++) {
        mnames2.push(mnames[i] + " The Great");
    }
    return mnames2;
}
var mnames3 = make_great(mnames);
console.log("Array with original names");
console.log("=========================");
show_magicians(mnames); //executing the function
console.log("\nArray with The Great added");
console.log("============================");
show_magicians(mnames3);
