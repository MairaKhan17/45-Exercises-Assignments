// EXERCISE 33
// Array to store numbers 1 through 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    // Determine the ordinal suffix based on the number
    var suffix = void 0;
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    else {
        suffix = "th";
    }
    // Print the ordinal number
    console.log("".concat(number).concat(suffix));
}
