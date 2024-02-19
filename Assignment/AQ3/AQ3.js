//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//Author: Muhammad Farhan
//Date: 19th Feb 2024
var pname = "Muhammad Farhan";
console.log("Before Name Case: " + pname);
console.log("Lowercase: " + pname.toLowerCase());
console.log("Uppercase: " + pname.toUpperCase());
var tname = pname.split(" ").map(function (cha) { return cha[0].toUpperCase() + cha.substr(1); }).join(" ");
console.log("Titlecase:", tname);
