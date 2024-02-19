//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//Author: Muhammad Farhan
//Date: 19th Feb 2024
let pname = "Muhammad Farhan"; //initialized variable
console.log("Before Name Case: "+pname); //Actual Case
console.log("Lowercase: "+pname.toLowerCase()); //Coverted to Lowercase
console.log("Uppercase: "+pname.toUpperCase()); //Converted to Uppercase
const tname = pname.split(" ").map((cha: string) => cha[0].toUpperCase() + cha.substr(1)).join(" "); //Converted to Title Case
console.log("Titlecase:", tname);
