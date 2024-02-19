//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Author: Muhammad Farhan
// Date: 15th Feb 2024
var invitations = ["Ubaid", "Saqib", "Aftab", "Faizan"]; // Initialized a variable and stored values
for (var i = 0; i < invitations.length; i++) { // Using for loop to print invitations
    console.log("Mr.", invitations[i], "You are cordially invited for Dinner!");
}
console.log("\nUnfortunately Mr.", invitations[3], "is unable to attend the Dinner. Inviting Jawwad instead.\n"); //Stating the name of the guest who can’t make it.
invitations[3] = "Jawwad"; //Updating the list.
for (var i = 0; i < invitations.length; i++) { // Using for loop to print updated invitations
    console.log("Mr.", invitations[i], "You are cordially invited for Dinner!");
}
