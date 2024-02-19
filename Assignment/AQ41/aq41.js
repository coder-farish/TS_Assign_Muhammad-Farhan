//41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
var mnames = ["David Copperfield", "Harry Houdini", "David Blaine", "Teller"];
function show_magicians(mnames) {
    for (var i = 0; i < mnames.length; i++) {
        console.log(mnames[i]);
    }
}
show_magicians(mnames);
