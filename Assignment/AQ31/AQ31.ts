//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
let usernames: string[] = []; //Intialized variables
if (usernames.length === 0) { //using if statement to check if users list is empty
    console.log("We are short of users and need to find some!")
} else { //if not empty then the process will continue
for (const users of usernames) { //Using for loop to check every username
    if (users == "admin") { //If user is admin then a customized msg will be displayed
        console.log("Welcome admin! Would you like to see the users login report?");
    }
    else { //if not then normal user welcome msg will be displayed
        console.log("Welcome",users+",","Thank You for logging in again!")
    }
}
}