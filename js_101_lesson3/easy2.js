/*
Easy 2 Practice Problems
*/

/////// question 1 ///////
// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
let advice = "Few things in life are as important as house training your pet dinosaur.";
function replaceImportant(str) {
  return str.replace("important", "urgent");
}
//console.log(replaceImportant(advice));
// replaceAll() will replace all occurrences of important with urgent

/////// question 2 ///////
/*
The Array.prototype.reverse method reverses the order of elements in an array, and
Array.prototype.sort can rearrange the elements in a variety of ways, including descending.
Both of these methods mutate the original array as shown below. Write two distinct ways of
reversing the array without mutating the original array. Use reverse for the first solution,
and sort for the second.
*/
let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]
let reversed = numbers.slice().reverse()
// console.log(reversed);
// console.log(numbers);

numbers = [1, 2, 3, 4, 5];
//numbers.sort((num1, num2) => num2 - num1);
//console.log(numbers); // [ 5, 4, 3, 2, 1 ]
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedArray); // [5, 4, 3, 2, 1]
// console.log(numbers);

// BONUS: Can you do it using the Array.prototype.forEach() method?
let forEachReversedArray = [];
numbers.forEach((number) => {
  forEachReversedArray.unshift(number);
});

//console.log(forEachReversedArray);

/////// question 3 ///////
// Given a number and an array, determine whether the number is included in the array.
let numbers2 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true
// console.log(numbers2.includes(number1));
// console.log(numbers2.includes(number2));

/////// question 4 ///////
// Starting with the string:
let famousWords = "seven years ago...";
// show two different ways to put the expected "Four score and " in front of it.
// console.log("Four score and " + famousWords);
// console.log("Four score and ".concat(famousWords));

/////// question 5 ///////
/* 
Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number 
at index 2, so that the array becomes [1, 2, 4, 5].
*/
let numbers3 = [1, 2, 3, 4, 5];
numbers3.splice(2, 1);
//console.log(numbers3);

/////// question 6 ///////
// Suppose we build an array like this:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
// The code will create a nested array that looks like this:
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// Create a new array that contains all of the above values, but in an un-nested format:
flintstones = [].concat(...flintstones);
// OR
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
// OR
let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});

/////// question 7 ///////
// Consider the following object:
let flintstones2 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// Create an array from this object that contains only two elements: Barney's name and Barney's number:
let barneyArray = Object.entries(flintstones2).filter(pair => pair[0] === "Barney").shift();
//console.log(barneyArray);

/////// question 8 ///////
// How would you check whether the objects assigned to variables numbers and table below are arrays?
let numbers4 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
Array.isArray(numbers4);
Array.isArray(table);

/////// question 9 ///////
/* 
Back in the stone age (before CSS), we used spaces to align things on the screen. If we 
have a 40-character wide table of Flintstone family members, how can we center the 
following title above the table with spaces?
*/
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);
console.log(title.padStart(padding + title.length));

/////// question 10 ///////
/*
Write two one-line expressions to count the number of lower-case t characters in each of the following strings:
*/
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => char === 't').length;
statement1.split('').filter(char => char === 't').length;