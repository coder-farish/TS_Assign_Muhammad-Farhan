//45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Author: Muhammad Farhan
// Date: 19th Feb 2024
function buy_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var ocar = {
        Manufacturer: manufacturer,
        Model: model,
        Options: {}
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var keywords in option) {
            ocar.Options[keywords] = option[keywords];
        }
    }
    return ocar;
}
var vcar = buy_car('Daihatsu', 'Mira', { Color: 'Black' }, { Automatic: true }, { KeyLess: true });
console.log("Detailed Information of the CAR:\n", vcar);
