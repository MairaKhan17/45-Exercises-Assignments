// Exercise : 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

const guestList: string[] = ["Areeba", "Afroze", "Dua", "Bushra", "Sumain"];

console.log(`You are inviting ${guestList.length} people to dinner.`);

guestList.forEach(guest => console.log(`Dear ${guest}, I would be honored to have you for dinner.`));
