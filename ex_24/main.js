// Exercise # 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "world";
console.log("Is string1 equal to 'hello'? I predict True.");
console.log(string1 == "hello");
console.log("Is string1 not equal to 'world'? I predict True.");
console.log(string1 != "world");
// Tests using the lower case function
var upperCaseString = "HELLO";
console.log("Is upperCaseString in lowercase equal to 'hello'? I predict True.");
console.log(upperCaseString.toLowerCase() == "hello");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 5;
console.log("Is num1 equal to 10? I predict True.");
console.log(num1 == 10);
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 != num2);
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 less than or equal to 10? I predict True.");
console.log(num1 <= 10);
// Tests using "and" and "or" operators
var value1 = true;
var value2 = false;
console.log("Is value1 true and value2 false? I predict False.");
console.log(value1 && value2);
console.log("Is value1 true or value2 false? I predict True.");
console.log(value1 || value2);
// Test whether an item is in an array
var array = [1, 2, 3, 4, 5];
console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3));
// Test whether an item is not in an array
console.log("Is 6 not in the array? I predict True.");
console.log(!array.includes(6));
