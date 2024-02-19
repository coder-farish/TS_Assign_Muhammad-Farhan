//30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// Author: Muhammad Farhan
// Date: 18th Feb 2024
let usernames: string[] = ["admin", "farish", "farhan", "aftab", "sarfaraz"]; //Intialized variables
for (const users of usernames) { //Using for loop to check every username
    if (users == "admin") { //If user is admin then a customized msg will be displayed
        console.log("Welcome admin! Would you like to see the users login report?");
    }
    else { //if not then normal user welcome msg will be displayed
        console.log("Welcome",users+",","Thank You for logging in again!")
    }
}