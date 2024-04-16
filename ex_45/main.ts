// EXERCISE : 45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function carInfo(manufacturer: string, model: string, ...options: [string, any][]): object {
    let car: { [key: string]: any } = {
        "manufacturer": manufacturer,
        "model": model
    };

    for (let option of options) {
        const [key, value] = option;
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional options
let myCar = carInfo("Toyota", "Corolla", ["color", "red"], ["year", 2022]);

// Print the returned object to verify the information
console.log(myCar);