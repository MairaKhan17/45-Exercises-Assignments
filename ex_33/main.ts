// EXERCISE 33
// Array to store numbers 1 through 9
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    // Determine the ordinal suffix based on the number
    let suffix: string;
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    } else {
        suffix = "th";
    }

    // Print the ordinal number
    console.log(`${number}${suffix}`);
}