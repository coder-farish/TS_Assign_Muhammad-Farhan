var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//18. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Author: Muhammad Farhan
// Date: 15th Feb 2024
var places = ["Switzerland", "Paris", "London", "Madagascar", "Sydney"]; // Initialized a variable and stored values
console.log("Original Order: ", places, "\n");
var asort = __spreadArray([], places, true).sort();
console.log("Alphabetical Order: ", asort, "\n");
console.log("Original Order: ", places, "\n");
var rsort = __spreadArray([], places, true).sort();
console.log("Reverse Alphabetical Order: ", rsort.reverse(), "\n");
console.log("Original Order: ", places, "\n");
console.log("Reverse Order: ", places.reverse(), "\n");
console.log("Reverse Order again to make it Original: ", places.reverse(), "\n");
console.log("Alphabetic Order: ", places.sort(), "\n");
console.log("Reverse Alphabetic Order: ", places.reverse(), "\n");
