//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Author: Muhammad Farhan
// Date: 15th Feb 2024
const invitations = ["Ubaid","Saqib","Aftab","Faizan"]; // Initialized a variable and stored values
for (let i = 0; i < invitations.length; i++) { // Using for loop to print invitations
    console.log("Mr.",invitations[i], "You are cordially invited for Dinner!");
}
console.log("\nUnfortunately Mr.",invitations[3], "is unable to attend the Dinner. Inviting Mr. Jawwad instead.\n"); //Stating the name of the guest who can’t make it.
invitations[3]="Jawwad"; //Updating the list.
for (let i = 0; i < invitations.length; i++) { // Using for loop to print updated invitations
    console.log("Mr.",invitations[i], "You are cordially invited for Dinner!");
}
console.log("\nFortunately I can invite more guests due to availability of a bigger Dinner Table.\n");
invitations.unshift("Sarfaraz"); //Adding at the beginning
invitations.push("Furqan"); // Adding at the end
invitations.splice(3,0,"Talha"); //Adding at the middle
for (let i = 0; i < invitations.length; i++) { // Using for loop to print updated invitations
    console.log("Mr.",invitations[i], "You are cordially invited for Dinner!");
}
console.log("\nOppsss..... The new Dinner table will not arrive on time and we can only entertain 2 guests tonight.\n");
for (let i = 2; i < invitations.length; i++) { // Using for loop to print deleted invitations
    console.log("Sorry Mr.",invitations[i],"we are unable to entertain you today.")
    delete invitations[i];
}
console.log();
for (let i = 0; i < 2; i++) { // Using for loop to print updated invitations
    console.log("Mr.",invitations[i],"we will entertain you today.")
    delete invitations[i];
}
console.log("\n",invitations); //printing the empty list.
