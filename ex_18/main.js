// Exercise : 18 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Japan", "Italy", "Australia", "Canada", "Brazil"];
// Print array in its original order
console.log("Original order:", placesToVisit);
// Print array in alphabetical order without modifying the original list
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// Show that the original array is still in its original order
console.log("Original order:", placesToVisit);
// Print array in reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
// Show that the original array is still in its original order
console.log("Original order:", placesToVisit);
// Reverse the order of the list (modifies the original list)
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order of the list again to bring it back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
// Sort the array to store it in alphabetical order (modifies the original list)
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
// Sort the array to store it in reverse alphabetical order (modifies the original list)
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
