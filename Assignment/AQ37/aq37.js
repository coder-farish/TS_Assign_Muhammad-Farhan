//37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
function make_shirt(ssize, smessage) {
    if (ssize === void 0) { ssize = "Large"; }
    if (smessage === void 0) { smessage = "I love TypeScript"; }
    console.log("\nOrder has been placed for 1", ssize, "Sized Shirt with", "'" + smessage + "'", "printed on it.");
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I like TypeScript");
