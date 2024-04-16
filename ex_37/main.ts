// Exercise # 37
function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt("medium");

// Create a shirt of any size with a different message
make_shirt("small", "TypeScript rocks!");