//23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// Author: Muhammad Farhan
// Date: 18th Feb 2024

const car = {Model: "2024", Make: "Daihatsu Mira", Engine: "660cc", Seating: "4", Color: "White"}; //Defining object with different values
//Conditional Test 1 predicting True Values
console.log("Car Prediction Test No. 1");
console.log("=========================");
console.log("Car is Daihatsu Mira?",car.Make == "Daihatsu Mira");
console.log("Model Year of the Car is 2024?",car.Model == "2024");
console.log("Engine Capacity of the Car is 660cc?",car.Engine == "660cc");
console.log("Color of the Car is White?",car.Color == "White");
console.log("Seating Capacity of the Car is 4?",car.Seating == "4");
//Conditional Test 2 predicting False Values
console.log("\nCar Prediction Test No. 2");
console.log("=========================");
console.log("Car is Daihatsu Move?",car.Make == "Daihatsu Move");
console.log("Model Year of the Car is 2020?",car.Model == "2020");
console.log("Engine Capacity of the Car is 800cc?",car.Engine == "800cc");
console.log("Color of the Car is Red?",car.Color == "Red");
console.log("Seating Capacity of the Car is 5?",car.Seating == "5");