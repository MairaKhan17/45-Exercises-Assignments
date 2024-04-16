// Exercise : 15  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//  Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are invitin Print a second set of invitation messages, one for each person who is still in your list.


let guestList: string[] = ["Areeba", "Afroze", "Dua", "Bushra", "Sumain"];

guestList.forEach(guest => console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`));

const cantCome: string = guestList[2];
console.log(`${cantCome} can't come for the dinner.`);

const newGuest: string = "Sana";
guestList[2] = newGuest;

// Print a second set of invitation messages
guestList.forEach(guest => console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`));
