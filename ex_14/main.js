// Exercise : 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Areeba", "Afroze", "Dua", "Bushra", "Sumain"];
guestList.forEach(function (guest) { return console.log("Dear ".concat(guest, ", \"I would be honored to have you join me for dinner.\"")); });
