//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Author: Muhammad Farhan
// Date: 15th Feb 2024
var invitations = ["Ubaid", "Saqib", "Aftab", "Faizan"]; // Initialized a variable and stored values
for (var i = 0; i < invitations.length; i++) { // Using for loop to print invitations
    console.log("Mr.", invitations[i], "You are cordially invited for Dinner!");
}
console.log("\nUnfortunately Mr.", invitations[3], "is unable to attend the Dinner. Inviting Mr. Jawwad instead.\n"); //Stating the name of the guest who can’t make it.
invitations[3] = "Jawwad"; //Updating the list.
for (var i = 0; i < invitations.length; i++) { // Using for loop to print updated invitations
    console.log("Mr.", invitations[i], "You are cordially invited for Dinner!");
}
console.log("\nFortunately I can invite more guests due to availability of a bigger Dinner Table.");
invitations.unshift("Sarfaraz"); //Adding at the beginning
invitations.push("Furqan"); // Adding at the end
invitations.splice(3, 0, "Talha"); //Adding at the middle
for (var i = 0; i < invitations.length; i++) { // Using for loop to print updated invitations
    console.log("Mr.", invitations[i], "You are cordially invited for Dinner!");
}
