// ************** 100 days coding challenge "11 day" ************** //


/* Q31 No Users: Ensure your user list isn’t empty.
Explain & TIP: Before greeting users, check if there are any. 
This teaches you to handle empty arrays.*/


let usernames: string[] = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Greet users
}


/* Q32  Checking Usernames: Ensure uniqueness in usernames.
Explain & TIP: Checking for uniqueness is crucial in user 
management. Use loops and conditionals to handle case-insensitive comparisons.*/


let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});


/* Q33  Ordinal Numbers: Display numbers with their ordinal suffixes.
Explain & TIP: Use a loop and an if-else chain to append the correct ordinal suffix to numbers. 
This introduces you to combining loops with conditional logic for formatting.*/


let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let num = "th";
    if (number === 1) {
        num = "st";
    } else if (number === 2) {
        num = "nd";
    } else if (number === 3) {
        num = "rd";
    }
    console.log(`${number}${num}`);
});
