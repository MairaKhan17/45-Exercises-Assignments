// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "maira Khan";
// Lower Case
console.log(personName.toLowerCase());
// upper Case
console.log(personName.toUpperCase());
// Title Case
var firstLetter = personName.charAt(0).toUpperCase();
var secondLetter = personName.slice(1).toLowerCase();
var titleCase = firstLetter + secondLetter;
console.log(titleCase);
