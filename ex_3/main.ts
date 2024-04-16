// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "maira Khan";
// Lower Case
console.log(personName.toLowerCase());
// upper Case
console.log(personName.toUpperCase());

// Title Case
let firstLetter:string =  personName.charAt(0).toUpperCase();
let secondLetter :string = personName.slice(1).toLowerCase();
let titleCase = firstLetter + secondLetter;
console.log(titleCase)
