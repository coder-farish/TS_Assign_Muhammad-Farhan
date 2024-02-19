//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
let current_users: string[] = ["admin", "farish", "farhan", "aftab", "sarfaraz"]; //Intialized variables
let new_users: string[] = ["Ubaid", "Faizan", "Farhan", "AFTAB", "Saqib"]; //Intialized variables
for (const newuser of new_users) { //Using for loop to check every username
    const lcnewuser = newuser.toLowerCase(); //lower case search
    if (current_users.includes(lcnewuser)) { // comparing new users with current users
        console.log("Oppss! The username",newuser,"is not available. Please enter a new username.")
    } else{
        console.log("Congrats! The username",newuser,"is available. Please proceed.")
    }
}