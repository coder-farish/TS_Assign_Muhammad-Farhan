//41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
const mnames = ["David Copperfield", "Harry Houdini", "David Blaine", "Teller"]; //initialized array with variables

function show_magicians(mnames: string[]): void { //fuction which prints every array values
for (let i=0; i<mnames.length; i++) {
    console.log(mnames[i]);
}
}
show_magicians(mnames); //executing the function