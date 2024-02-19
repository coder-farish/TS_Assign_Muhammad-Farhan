//Test whether an item is in a array
//Note: The code is giving error in typescript file due to some library issue but JS is working fine.
console.log("\nTest whether an item is in a array");
const carr: number[] = [2024, 4];
if (carr.includes(4)) {
console.log("The value is in the array");
} else {
console.log("The value is not in the array");
}

if (carr.includes(2023)) {
    console.log("\nThe value is in the array");
    } else {
    console.log("\nThe value is not in the array");
    }