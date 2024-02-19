//42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
const mnames = ["David Copperfield", "Harry Houdini", "David Blaine", "Teller"]; //initialized array with variables

function show_magicians(mnames: string[]): void { //fuction which prints every array values
for (let i=0; i<mnames.length; i++) {
    console.log(mnames[i]);
}
}

function make_great(mnames: string[]): void { //function to modify the array with the great with every magician
    for (let i=0; i<mnames.length; i++) {
        mnames[i] = mnames[i]+" The Great";
    }
}
make_great(mnames); //executing the function to modify the values in array
show_magicians(mnames); //executing the function