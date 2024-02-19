//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
var current_users = ["admin", "farish", "farhan", "aftab", "sarfaraz"]; //Intialized variables
var new_users = ["Ubaid", "Faizan", "Farhan", "AFTAB", "Saqib"]; //Intialized variables
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) { //Using for loop to check every username
    var newuser = new_users_1[_i];
    var lcnewuser = newuser.toLowerCase();
    if (current_users.includes(lcnewuser)) {
        console.log("Oppss! The username", newuser, "is not available. Please enter a new username.");
    }
    else {
        console.log("Congrats! The username", newuser, "is available. Please proceed.");
    }
}
