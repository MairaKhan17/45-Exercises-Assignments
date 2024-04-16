// Exercise # 37
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the message: \"").concat(message, "\""));
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt("medium");
// Create a shirt of any size with a different message
make_shirt("small", "TypeScript rocks!");
