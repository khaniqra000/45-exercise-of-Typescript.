"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is a 45 question Assignment
// NAME: IQRA KHAN
// DATE: 14/May/2024
QUESTION_ANSWER: 1;
//  Install Node.js, TypeScript and VS Code on your computer.
ANSWER: 1;
//  Installing complete.
console.log("\n\t \t ANSWER_NUMBER 1 \n Done Installaing of Node.js, TypeScript and VS \n");
QUESTION_NUMBER: 2;
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("\t \t ANSWER_NUMBER : 2 \n");
let person_Name = "ERIC";
console.log("Hello", person_Name, "would you like to learn some python today?");
QUESTION_NUMBER: 3;
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("\n \t \t ANSWER_NUMBER : 3 \n");
let personName = "Iqra";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
QUESTION_NUMBER: 4;
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("\t \t ANSWER_NUMBER : 4 \n");
let Quote1 = "laughing face do not mean that there is absence of sorrow! But it means that they have the ability to deal with it..\n";
let Author = " William Shakespeare";
console.log(`${Author} once said, "${Quote1}`);
QUESTION_NUMBER: 5;
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("\t \t ANSWER_NUMBER : 5 \n");
let Quote2 = "No legacy is so rich as honesty";
let famouse_persone = "William Shakespear";
let message = `${famouse_persone}once said, ${Quote2}`;
console.log(message);
QUESTION_NUMBER: 6;
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("\n \t \t ANSWER_NUMBER : 6 \n");
let WhitespaceName = `\n\t SIR ZIA KHAN\t\n`;
console.log(WhitespaceName);
let strippped = WhitespaceName.trim();
console.log(strippped);
QUESTION_NUMBER: 7;
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
QUESTION_NUMBER: 8;
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log("\t \t ANSWER_NUMBER :7 and 8 \n");
console.log(5 + 3);
console.log(11 - 3);
console.log(2 * 4);
console.log(16 / 2);
QUESTION_NUMBER: 9;
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("\t \t ANSWER_NUMBER : 9 \n");
let favoriteNamber = 22;
console.log(`My favorite nUmber is ${favoriteNamber}`);
QUESTION_NUMBER: 10;
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log("\n \t \t ANSWER_NUMBER : 10 \n");
//exercise 10 part 1 adding comment
//Name is iqra khan
//Date: 4/may/2024
//This program will run simple code just like hellow world
console.log(`Hello world simple program`);
//exercise 10 part 2 adding comment
//My Name is Iqra khan
//To Day Date is 4/may/2024
//This program will multiplication
console.log(5 * 8);
QUESTION_NUMBER: 11;
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("\t \t ANSWER_NUMBER : 11 \n");
let familyMembers = [`Mustafa`, `Amna`, `Ahmed`, `Anabia`, `Anshra`, `Saad`];
for (let i = 0; i < familyMembers.length; i++) {
    console.log(familyMembers[i]);
}
QUESTION_NUMBER: 12;
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("\t \t ANSWER_NUMBER : 12 \n");
let Members = [`Mustafa  `, `Amana  `, `Ahmed  `, `Anabia  `, `Anshra  `, `Saad  `];
let Message = `Did you completed 45 questions?`;
for (let i = 0; i < Members.length; i++) {
    console.log(Members[i] + message);
}
QUESTION_NUMBER: 13;
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("\n \t \t ANSWER_NUMBER : 13 \n");
let transpotations = [" civic", " bike", " BMW", " sport bike"];
for (let i = 0; i < transpotations.length; i++) {
    let message = `I would like to own a`;
    console.log(message + transpotations[i]);
}
QUESTION_NUMBER: 14;
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("\n \t \t ANSWER_NUMBER : 14 \n");
let Guest_list1 = [`Hussain`, `Hamza`, `Ameer`, `Umer`, `Hassan`];
for (let i = 0; i < Guest_list1.length; i++) {
    console.log("Respected czns:" + Guest_list1[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
QUESTION_NUMBER: 15;
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
console.log("\t \t ANSWER_NUMBER : 15 \n");
let Guest_list2 = [`Hussain`, `Hamza`, `Ameer`, `Umer`, `Hassan`];
for (let i = 0; i < Guest_list2.length; i++) {
    console.log(`Respected czns, ` + Guest_list2[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
let not_present1 = 'Hamza';
let new_guest1 = 'Naveed khan';
Guest_list1[1] = new_guest1;
for (let i = 0; i < Guest_list1.length; i++) {
    console.log(`Respected czns ` + Guest_list1[i] + `,\n We invited you on dinner tomorrw.\nThank You\n`);
}
console.log(`Mr. ${not_present1} will not comming tomorry dinner`);
QUESTION_NUMBER: 16;
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("\n \t \t ANSWER_NUMBER : 16 \n");
// Creating a Guestlist Array
let Guest_list = [`Hussain`, `Hamza`, `Ameer`, `Umer`, `Hassan`];
// Making varibale for those who is not present
let not_present = 'Hamza';
// New Guestlist member
let new_guest = 'Naveed khan';
Guest_list[1] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Respected czns/` + Guest_list[i] + `,\nWe invited you on dinner tomorrow.\nThank You\n`);
}
Guest_list.unshift(`Ishaq `, `Shabir `);
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Respected sir /` + Guest_list[i] + `,\nWe invited you on dinner tomorrow.We found bigger dinner table so we decide to invite 2 more family members\nThank you\n`);
}
QUESTION_NUMBER: 17;
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("\t \t ANSWER_NUMBER : 17 \n");
// Creating a Guest_list array
let Guest_list3 = [`Ali`, `Ahmed`, `farhan`, `Rizwan`];
// One member is not preasent thats way we invite 1 new_Guest
let not_present2 = `Farhan`;
let new_guest2 = `Asad`;
Guest_list[2] = new_guest;
// Add 3 more guest in the Guest_list array
Guest_list.unshift(`Saba`, `Iqra`, `Ali`);
// Oh Sorry we just invited 2 members 
console.log('\nunforthunately we can not arrange big table, only two people allow.');
while (Guest_list.length > 2) {
    // Oh so sorry we are not invited you for dinner
    let remove_guest = Guest_list.pop();
    console.log(`Sorry sir, ${remove_guest} you are not invited for dinner,\n`);
}
// Printing a message to each of the two members still on your list
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Respected sir ` + Guest_list[i] + `,\nyes you are still invited on tomorrw dinner\nThank you\n`);
}
// Removing the Guest_list
Guest_list.splice(0.2);
console.log(Guest_list);
QUESTION_NUMBER: 18;
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\t \t ANSWER_NUMBER : 18 \n");
// Making a array of cities and print its Orignal order
let places_name = [`Rome`, `Dubia`, `Bangkok`, `Cape Town`, `Istanbul`];
console.log('original order: ' + places_name);
// Print the array in Alphabetical order without mobifing the actal list
console.log('copy: ' + [...places_name].sort());
// Show that your array is still in its original order by printing it
console.log('original: ' + places_name);
// Print your array in reverse alphabetical order without changing the order of the original list
console.log('copy: ' + [...places_name].sort().reverse());
// Show that your array is still in its original order by printing it again
console.log('copy: ' + [...places_name].sort().reverse());
// Reverse the orde of your list ptint the array to show that its order has changed 
console.log('original: ' + places_name.sort());
// Reverse the order of your list again print the list to show its back to its original order 
console.log('copy: ' + [...places_name].sort().reverse());
// Sort your array so its stored in alphabetical order print the array to show that its order has been changed
console.log('original: ' + places_name.sort());
// Sort to change your array so its stored in revers alphabetical order print the list to show that its order has changed
QUESTION_NUMBER: 19.;
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("\n \t \t ANSWER_NUMBER : 19 \n");
let Guest_list4 = [`Ali`, `Alisha`, `Fatima`, `Usman`];
for (let i = 0; i < Guest_list4.length; i++) {
    console.log('Respected sir ' + Guest_list4[i] + ',\nwe invited you on dinner tomorrow.\nThank you\n');
}
console.log(`\n PERINTING NUMBER OF GUEST INVITED`);
console.log(`we had finally invited ${Guest_list4.length} people`);
EXERCISE_NUMBER: 20.;
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("\n \t \t ANSWER_NUMBER : 20 \n");
let Mountains = ['Mount Fuji(Japan)', 'Appalachian Mountain(USA)', 'Andes Mountain(south America)', 'Mount Etna(Italy)'];
console.log("list of mountains:");
for (let top of Mountains) {
    console.log(top);
}
EXERCISE_NUMBER: 21.;
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("\n \t \t ANSWER_NUMBER : 21 \n");
let pizza = {
    name: "creamy",
    amount: 1600
};
let sandwhich = {
    name: "vegitable",
    amount: 600
};
console.log(`pizza : ${pizza.name},\namount: ${pizza.amount}`);
console.log(`vegitable: ${sandwhich.name},\namount: ${sandwhich.amount}`);
EXERCISE_NUMBER: 22;
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program
console.log("\t \t ANSWER_NUMBER : 22 \n");
let array = ['tayab', 'baber', 7, 8, 9, 10];
console.log(array[3]);
console.log(array[0]);
EXERCISE_NUMBER: 233333333.;
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log("\t \t ANSWER_NUMBER : 23 \n");
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');
console.log(" Is car < 'subaru'? I predict False.");
console.log(car < 'subaru');
console.log("Is car > 'subaru'? I predict false.");
console.log(car > 'subaru');
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru');
console.log("Is car >= 'subaru'? I predict True");
console.log(car >= 'subaru');
console.log("Is car?  I predict True.");
console.log(car);
console.log("I !car? I predict false");
console.log(!car);
EXERCISE_NUMBER: 24;
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
console.log("\t \t ANSWER_NUMBER : 24 \n");
let pen = "pen";
console.log('pen is equal to pen');
console.log(pen == "pen");
console.log('pen is not equal yo pen');
console.log(pen != "pen");
let uppercasepen = "PEN";
console.log("PEN is equal to pen after converting to lowercase");
console.log(uppercasepen.toLocaleLowerCase() == "pen");
console.log("PEN is not equal to pen after converting to lowercase");
console.log(uppercasepen.toLocaleLowerCase() != "pen");
let ten = 10;
let twenty = 20;
console.log("ten is equal to twenty");
console.log(ten == twenty);
console.log("ten is not equal to twenty");
console.log(ten != twenty);
console.log("twenty is greater than ten");
console.log(twenty > ten);
console.log("twenty is less than ten");
console.log(twenty < ten);
console.log("twenty is greater than or equal to ten");
console.log(twenty >= ten);
console.log("twenty is less than or equal to ten");
console.log(twenty <= ten);
console.log("twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);
console.log("twenty in not equal to ten and ten is greater than twenty");
console.log(twenty != ten && ten > twenty);
console.log("twenty is greater than ten or twenty is  not equal to twenty");
console.log(twenty > ten || twenty == twenty);
console.log("twenty is less than ten or twenty is not equal to twenty");
console.log(twenty < ten || twenty != twenty);
let ice_cream = ["strawberry", "banana", "blue berry", "black berry"];
console.log("black berry is included in my ice-cream arry");
console.log(ice_cream.includes("black berry"));
console.log("black is not includded in my ice_cream array");
console.log(!ice_cream.includes("black berry"));
EXERCISE_NUMBER: 25;
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
console.log("\n \t \t ANSWER_NUMBER : 25 \n");
let alien_colour = "Red";
if (alien_colour === "Red") {
    console.log("Alien colour is Red .The player just earned 5 point.");
}
if (alien_colour === "green") {
    console.log("Aline colour is green");
}
EXERCISE: 26;
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
console.log("\n \t \t ANSWER_NUMBER : 26 \n");
let alien_colour1 = "Black";
if (alien_colour1 === "Black") {
    console.log("Player just earned 5 points for shooting the aline.");
}
else {
    console.log("Player just earned 10 points.");
}
if (alien_colour === "white") {
    console.log("My aline colour is white.");
}
else {
    console.log("\nMy aline colour is Red");
}
EXERCISE_NUMBER: 27;
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log("\n \t \t ANSWER_NUMBER : 27 \n");
let aliencolour = "Green";
if (aliencolour === "Green") {
    console.log(" (VERSION 1), You shot down Green aline you have earned 5 points.");
}
else if (aliencolour === "Yellow") {
    console.log("You shot down Yellow aline  you have earned 10 points.");
}
else if (aliencolour === "Red") {
    console.log("You shot down Red aline you have earned 15 points.");
}
let alien_colour2 = "Yellow";
if (alien_colour2 === "Green") {
    console.log("You shot down Green alien you have earned 5 points.");
}
else if (alien_colour2 === "Yellow") {
    console.log("(VERSION 2), you shot down Yellow alien you have earned 10 points.");
}
else if (alien_colour2 === "Red") {
    console.log("you shot down Red alien youhave earned 15 points.");
}
let alien_colour3 = "Red";
if (alien_colour3 === "Green") {
    console.log("you shot down Green alien you have earned 5 points.");
}
else if (alien_colour3 === "Yellow") {
    console.log("you shot down yellow alien you have earned 10 ponts.");
}
else if (alien_colour3 === "Red") {
    console.log("(VERSION 3), you sht down Red alien you have earned 15 points.");
}
EXERCISE_NUMBER: 28;
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
console.log("\n \t \t ANSWER_NUMBER : 28 \n");
let age = 22;
if (age < 2) {
    console.log("you are Baby.");
}
else if (age >= 2 && age < 4) {
    console.log("you are a Todler.");
}
else if (age >= 4 && age < 13) {
    console.log("you are a Kid.");
}
else if (age >= 13 && age < 20) {
    console.log("you are a Teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("you are an Adult.");
}
else if (age >= 65) {
    console.log("you are Elders.");
}
EXERCISE_NUMBER: 29;
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
console.log("\n \t \t ANSWER_NUMBER : 29 \n");
let favorite_fruits = ["Blue Berry", "Graps", "Mango"];
if (favorite_fruits.includes("Graps")) {
    console.log("I Really Like Graps.");
}
if (favorite_fruits.includes("Blue Berry")) {
    console.log("I Really Like Blue Berry.");
}
if (favorite_fruits.includes("Orange")) {
    console.log("I Really Like Orage.");
}
if (favorite_fruits.includes("Mango")) {
    console.log("I Really Like Mango.");
}
if (favorite_fruits.includes("Apple")) {
    console.log("I Really Like Apple.");
}
EXERCISE_NUMBER: 30;
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
console.log("\n \t \t ANSWER_NUMBER : 30 \n");
let userNames = ["Iqra", "Khan", "Tanoli", "Usman", "Admin"];
userNames.forEach(OneUser => {
    if (OneUser === "Admin") {
        console.log(`Hello ${OneUser}, Would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${OneUser}, Thank you for logging in again.`);
    }
});
EXERCISE_NUMBER: 31;
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
console.log("\n \t \t ANSWER_NUMBER : 31 \n");
let userNames1 = ["Usama", "Umer", "salman", "subhan", "Manzoor"];
userNames = [];
if (userNames.length === 0) {
    console.log(" Your array is Empty, we need to find some users!");
}
else {
    userNames.forEach(Oneuser => {
        if (Oneuser === "Admin") {
            console.log(`Hello ${Oneuser}, Would you like to see a status report.`);
        }
        else {
            console.log(`Hello ${Oneuser}, Thank you for logging in again.`);
        }
    });
}
EXERCISE_NUMBER: 32;
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
console.log("\n \t \t ANSWER_NUMBER : 32 \n");
let current_users = ["amain", "Fatima", "Alisha", "Areeba", "Manal"];
let new_users = ["Sakhina", "Amain", "Manal", "Iqra", "saba"];
new_users.forEach(new_one_users => {
    let our_condition = (current_users.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_users.toLocaleLowerCase()));
    if (our_condition) {
        console.log(`Sorry ${new_one_users} is already taken!`);
    }
    else {
        console.log(`This Username ${new_one_users} is available.`);
    }
});
EXERCISE_NUMBER: 33;
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
console.log("\n \t \t ANSWER_NUMBER : 33 \n");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let oneNumber of numbers) {
    let ordinalEnding;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${oneNumber}${ordinalEnding}`);
}
EXERCISE_NUMBER: 34;
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("\t \t ANSWER_NUMBER : 34 \n");
// creating a arry
let Pizza = ["Malli boti", "chicken tikka", "spicy tikka"];
// using for-loop
for (let onepizza of Pizza) {
    console.log(`I like ${onepizza} pizza`);
}
// Print a Message outside of the loop
console.log("I love pizza");
console.log("I eat pizza every day");
EXERCISE_NUMBER: 35;
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("\n \t \t ANSWER_NUMBER : 35 \n");
// creating a Arry
let petAnimals = ["Rabbit", "Elephant", "Parrot"];
// Using For-loop
for (let onePet of petAnimals) {
    console.log(`A ${onePet} Would make a great pet. `);
}
// print a Message outside of for-loop
console.log("Any of these Animals would make a great pet!");
EXERCISE_NUMBER: 36;
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
console.log("\n \t \t ANSWER_NUMBER : 36 \n");
function make_shirt1(size, printMessage) {
    console.log(`you selected ${size} Size shirt with, ${printMessage} print on shirt.`);
}
make_shirt1("Medium", "I love my nephew");
make_shirt1("Small", "I love Amna.");
EXERCISE_NUMBER: 37;
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("\n \t \t ANSWER_NUMBER : 37 \n");
// Making a function
function make_shirt(size = "Large", printMessage = "I Love TypeScrity.") {
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt.`);
}
// calling function with by.defualt values
make_shirt();
// Calling a function now with Medium size and by.defult message
make_shirt("Medium");
// Calling a function small size and also with different print message
make_shirt("small", "I also love My all naphew's");
EXERCISE_NUMBER: 38;
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country
console.log("\n \t \t ANSWER_NUMBER : 38 \n");
// Describe a function
function Describe_city(City, Country = "Germany") {
    console.log(`${City} is in ${Country}`);
}
// Calling a function
Describe_city("Leipzig");
Describe_city("Hamburg");
Describe_city("Karachi", "Pakistan");
EXERCISE_NUMBER: 39;
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
console.log("\n \t \t ANSWER_NUMBER : 39 \n");
// Creating a function with parameters which return a values in string
function City_Country(City, Country) {
    return `${City} , ${Country}`;
}
// Calling a function and print the returned value
console.log(City_Country("karachi", "Pakistan"));
console.log(City_Country("Gottingen", "Germany"));
console.log(City_Country("Islamabad", "Pakistan"));
EXERCISE_NUMBER: 40;
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
console.log("\n \t \t ANSWER_NUMBER : 40 \n");
// Deffine the make function
function make_album(Artist_name, album_title, tracks) {
    let album = {
        Artist: Artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three function and creating 3 variables with  different values
let album1 = make_album("Asim But", "A graffiti artist");
console.log(album1);
let album2 = make_album("Ahmed Parvez", "A modernist painter");
console.log(album2);
let album3 = make_album("Iqbal Geoffrey", "A Calligrapher");
console.log(album3);
EXERCISE_NUMBER: 41;
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
console.log("\n \t \t ANSWER_NUMBER : 41 \n");
// Ddefine a function to print each Magician name from an array
function show_Magicians(Magicians) {
    Magicians.forEach(name => console.log(name));
}
// Define an arry containing Magicians name
let Magicion_Names = ["Harry Houdini", "Criss Angel", "Harry Blackstone jr"];
// call the function to print each magician name
show_Magicians(Magicion_Names);
EXERCISE_NUMBER: 42;
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
console.log("\n \t \t ANSWER_NUMBER : 42 \n");
// Define the function to show magician names
function show_magician(magician) {
    magician.forEach(name => console.log(name));
}
// Function to make magician great through , map() it will modify array
function make_greats(magician) {
    return magician.map(name => `The Great ${name}`);
}
// Define an array of magician name
let magician_name = ["Dynamo", "Penn and Teller", "Criss Angel"];
// Call make_great function to modify magicians names
let great_magician = make_greats(magician_name);
// Call show_magicians that show modified list of magicians
show_magician(great_magician);
EXERCISE_NUMBER: 43;
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log("\n \t \t ANSWER_NUMBER : 43 \n");
// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Function to make magicians great through , map() it will modify array
function make_great(magician) {
    return magician.map(name => `The Great ${name}`);
}
// Define an array of magicians names
let magician_names = ["Dynamo", "Penn and Teller", "Criss Angel"];
// Making a copy of orignal array through , Slich() function
let copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with thier names
let copy_great_magicians = make_great(copy_magician_names);
// Original
console.log("\norginal Array\n");
show_magicians(magician_names);
// Copied
console.log("\ncopied Array\n");
show_magicians(copy_great_magicians);
EXERCISE_NUMBER: 44;
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
console.log("\n \t \t ANSWER_NUMBER : 44 \n");
// Define a function with a rest parameter that accept items arguments representing our sandwhich
function makeSandwhich(...items) {
    console.log("\nMaking a Sandwhich with the following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwhich\n");
}
// Call the function 3 times different number of arguments
makeSandwhich("Bread", "Chicken", "Mayo", "Egg");
makeSandwhich("Bread", "Chicken", "Cheese", "Tomato", "Cucumber");
makeSandwhich("Bread", "Chicken", "cheese", "Olive", "Mushroom", "Egg");
QUESTION_NUMBER: 45;
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
console.log("\t \t ANSWER_NUMBER : 45 \n");
// Write a functions about a car
function CarInfo(manufacturer, modelName, ...options) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Store additional options in the car object
    for (let option of options) {
        for (let key in option) {
            car[key] = option[key];
        }
    }
    return car;
}
// Call the function with repuired information and additional options
let myCar = CarInfo('Toyota', 'civic', { colour: 'Black', year: '2023' });
console.log("returned object");
console.log(myCar);
console.log("\n \t \t Alhamdullilah I have done my 45 questions of Assignment.");
