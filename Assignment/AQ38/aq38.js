//38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("\n", city, "is in", country);
}
describe_city("Karachi"); //calling function with city name and default country name
describe_city("Lahore");
describe_city("London", "England"); //calling function with city and country
