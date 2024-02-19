//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Author: Muhammad Farhan
// Date: 16th Feb 2024
// Initialized separate arrays for different items
const processors = ["Intel","AMD"];
const laptops = ["Dell", "HP"];
const developers = ["Full Stack", "Backend"];
const os = ["Windows", "Linux"];
const languages = ["Typescript", "Python"];
// Consolidating all arrays in 1 array
const carray = [...processors,...laptops,...os,...developers,...languages];
console.log(carray); // Printing combined array