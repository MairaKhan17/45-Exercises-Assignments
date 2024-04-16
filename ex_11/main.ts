// exercise :11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let friendsName: string[] = ["Areeba" , "Bushra" , "Dua" , "Afroze"];

// index number                0           1         2         3

console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);

// we can also use a loop forEach

friendsName.forEach(friendsname => console.log(friendsname));