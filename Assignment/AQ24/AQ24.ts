//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Author: Muhammad Farhan
// Date: 18th Feb 2024

const car = {Model: 2024, Make: "Daihatsu Mira", Engine: "660cc", Seating: 4, Color: "White"}; //Defining object with different values
//Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings");
console.log("Car is Daihatsu Mira?",car.Make == "Daihatsu Mira");
console.log("Car is not Daihatsu Move?",car.Make !== "Daihatsu Move");
console.log("Car is Daihatsu Move?",car.Make == "Daihatsu Move");

//Tests using the lower case function
console.log("\nTests using the lower case function");
console.log("Car's name in lowercase: daihatsu mira.",car.Make.toLowerCase() == "daihatsu mira");
console.log("Car's wrong name in lowercase: daihatsu move.",car.Make.toLowerCase() !== "daihatsu move");
console.log("Car's name in lowercase: daihatsu move.",car.Make.toLowerCase() == "daihatsu move");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nNumerical Tests");
console.log("Seating Capacity of Car is 4.",car.Seating == 4);
console.log("Seating Capacity of Car is not 4.",car.Seating !== 4);
console.log("Seating Capacity of Car is > 3.",car.Seating > 3);
console.log("Seating Capacity of Car is < 3.",car.Seating < 3);
console.log("Model of Car is >= 2024.",car.Model >= 2024);
console.log("Model of Car is <= 2023.",car.Model <= 2023);

//Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators");
console.log("Seating Capacity is 4 and Model is 2024.",car.Seating == 4 && car.Model == 2024);
console.log("Seating Capacity is 4 and Model is 2023.",car.Seating == 4 && car.Model == 2023);
console.log("Seating Capacity is 4 or Model is 2024.",car.Seating == 4 || car.Model == 2024);
console.log("Seating Capacity is 4 or Model is 2023.",car.Seating == 4 || car.Model == 2023);
console.log("Seating Capacity is 5 or Model is 2023.",car.Seating == 5 || car.Model == 2023);

