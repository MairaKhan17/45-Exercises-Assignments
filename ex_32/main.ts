// Exercise # 32
let current_users: string[] = ["ali", "amir", "asim", "fatima", "khadija"];

// List of new users
let new_users: string[] = ["khadija", "zainab", "Ali", "muhammad", "ahmed"];

// Convert current usernames to lowercase for case-insensitive comparison
let current_users_lower: string[] = current_users.map(username => username.toLowerCase());

// Loop through the new users list
for (let new_user of new_users) {
    // Convert new username to lowercase for case-insensitive comparison
    let new_user_lower: string = new_user.toLowerCase();

    // Check if new username already exists in the current users list
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations, the username '${new_user}' is available.`);
    }
}
// cant understand this question but i tried 