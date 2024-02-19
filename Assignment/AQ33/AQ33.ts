//33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
const onums = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //initialized variabe with values
for (const onum of onums) { // for loop to go through the array
    let oending = "";
    if (onum == 1) { //check statements
        oending = "st"; //Ordual addition
    }
    else if (onum == 2) {
        oending = "nd";
    }
    else if (onum == 3) {
        oending = "rd";
    }
    else {
        oending = "th"
    }
    console.log(onum," =",onum+oending); //Printing number & ordial number
}
