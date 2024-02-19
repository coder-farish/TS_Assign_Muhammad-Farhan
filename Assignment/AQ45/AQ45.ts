//45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Author: Muhammad Farhan
// Date: 19th Feb 2024
// defined a function which holds manufacturer and model values as well as options for other keywords of any value.
function buy_car(manufacturer: string, model: string, ...options: { [keywords: string]: any }[]): { Manufacturer: string, Model: string, Options: { [keywords: string]: any } } {
    const ocar: { Manufacturer: string, Model: string, Options: { [keywords: string]: any } } = {
      Manufacturer: manufacturer,
      Model: model,
      Options: {}
    };
  
    for (const option of options) { //for loop for options and keywrods
      for (const keywords in option) {
        ocar.Options[keywords] = option[keywords];
      }
    }
    return ocar;
  }  
  // variable to hold function returned values
  const vcar = buy_car('Daihatsu', 'Mira', { Color: 'Black' }, { Automatic: true }, { KeyLess: true});
  console.log("Detailed Information of the CAR:\n",vcar); //printing the values returned by the function