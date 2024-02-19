//42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
var mnames = ["David Copperfield", "Harry Houdini", "David Blaine", "Teller"]; //initialized array with variables
function show_magicians(mnames) {
    for (var i = 0; i < mnames.length; i++) {
        console.log(mnames[i]);
    }
}
function make_great(mnames) {
    for (var i = 0; i < mnames.length; i++) {
        mnames[i] = mnames[i] + " The Great";
    }
}
make_great(mnames);
show_magicians(mnames); //executing the function
