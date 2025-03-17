// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.

var favActorFirstName = "Abdul ";
var favActorLastName = "Shahid";
var fullName = favActorFirstName + favActorLastName;
console.log(fullName);
var upperCase = fullName.toUpperCase();
console.log(upperCase);
let message = `my favt actor is ${upperCase}`;
console.log(message);
message += " and his best show is silicon Valley";
console.log(message);
