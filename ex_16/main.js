// Exercise# 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList = ["Areeba", "Afroze", "Dua", "Bushra", "Sumain"];
guestList.forEach(function (guest) { return console.log("Dear ".concat(guest, ", I would be honored to have you join me for dinner.")); });
console.log("\t\n Good news! We have some more friends to join us.");
// Add new guests
guestList.unshift("Zainab"); // Add one guest to the beginning
guestList.splice(3, 0, "Fatima"); // Add one guest to the middle
guestList.push("Laiba"); // Add one guest to the end
guestList.forEach(function (guest) { return console.log("Dear ".concat(guest, ", I would be honored to have you join me for dinner.")); });
