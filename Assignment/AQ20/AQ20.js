var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Author: Muhammad Farhan
// Date: 16th Feb 2024
// Separate arrays for different items
var processors = ["Intel", "AMD"];
var laptops = ["Dell", "HP"];
var developers = ["Full Stack", "Backend"];
var os = ["Windows", "Linux"];
var languages = ["Typescript", "Python"];
// Consolidating all arrays in 1 array
var carray = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], processors, true), laptops, true), os, true), developers, true), languages, true);
// Print combined array
console.log(carray);
