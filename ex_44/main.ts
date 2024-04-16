// Exercise # 44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Sandwich is ready!");
}

// Call the function three times with different number of arguments
make_sandwich("chicken boti", "green chutney", "tomato", "onion");
make_sandwich("seekh kebab", "mint chutney", "capsicum", "lettuce");
make_sandwich("aloo tikki", "tamarind chutney", "cucumber");