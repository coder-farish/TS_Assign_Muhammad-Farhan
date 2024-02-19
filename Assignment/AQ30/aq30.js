//30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// Author: Muhammad Farhan
// Date: 18th Feb 2024
var usernames = ["admin", "farish", "farhan", "aftab", "sarfaraz"]; //Intialized variables
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var users = usernames_1[_i];
    if (users == "admin") {
        console.log("Welcome admin! Would you like to see the users login report?");
    }
    else {
        console.log("Welcome", users + ",", "Thank You for logging in again!");
    }
}
