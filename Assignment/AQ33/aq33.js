//33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
var onums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, onums_1 = onums; _i < onums_1.length; _i++) {
    var onum = onums_1[_i];
    var oending = "";
    if (onum == 1) {
        oending = "st";
    }
    else if (onum == 2) {
        oending = "nd";
    }
    else if (onum == 3) {
        oending = "rd";
    }
    else {
        oending = "th";
    }
    console.log(onum, " =", onum + oending);
}
