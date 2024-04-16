// Exercise # 32
var current_users = ["ali", "amir", "asim", "fatima", "khadija"];
// List of new users
var new_users = ["khadija", "zainab", "Ali", "muhammad", "ahmed"];
// Convert current usernames to lowercase for case-insensitive comparison
var current_users_lower = current_users.map(function (username) { return username.toLowerCase(); });
// Loop through the new users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Convert new username to lowercase for case-insensitive comparison
    var new_user_lower = new_user.toLowerCase();
    // Check if new username already exists in the current users list
    if (current_users_lower.includes(new_user_lower)) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations, the username '".concat(new_user, "' is available."));
    }
}
