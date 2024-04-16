// Exercise : 21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var countries = {
    "USA": { capital: "Washington D.C.", population: 331000000 },
    "UK": { capital: "London", population: 67800000 },
    "China": { capital: "Beijing", population: 1439323776 },
    "India": { capital: "New Delhi", population: 1380004385 },
    "Brazil": { capital: "Brasília", population: 212559417 }
};
for (var country in countries) {
    console.log("Country: ".concat(country, ", Capital: ").concat(countries[country].capital, ", Population: ").concat(countries[country].population));
}
