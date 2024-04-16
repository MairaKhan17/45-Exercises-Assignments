// Exercise : 17 



let guestList: string[] = ["Areeba", "Afroze", "Dua", "Bushra", "Sumain"];


guestList.forEach(guest => console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`));


console.log("Good news! we have some new guests to join us.");

// Add new guests
guestList.unshift("Zainab"); // Add one guest to the beginning
guestList.splice(3, 0, "Fatima"); // Add one guest to the middle
guestList.push("Sadia"); // Add one guest to the end

// Print new dinner invitations
guestList.forEach(guest => console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`));

// Inform about the limited space
console.log("Unfortunately, We Are Late time, and we can only invite two people for dinner.");

// Remove guests until only two names remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

// Print invitation messages to the remaining two guests
guestList.forEach(guest => console.log(`Dear ${guest}, you're still invited to dinner.`));

// Empty the guest list
guestList = [];

// Print the empty list
console.log("Empty guest list:", guestList);