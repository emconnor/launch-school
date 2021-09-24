/*
Easy 1 Practice Problems
*/

/////// question 1 ///////
// Write a function that takes one integer argument, which may be positive, negative, or zero. 
// This method returns true if the number's absolute value is odd. You may assume that the argument 
// is a valid integer value.

function isOdd(num) {
  if (num == 0) return false;
  return num % 2 !== 0;
}

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

/////// question 2 ///////
// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
// let count = 1;
// while (count < 100) {
//   console.log(count);
//   count += 2;
// }

/////// question 3 ///////
// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
// for (let num = 1; num < 100; num++) {
//   if (num % 2 !== 0) continue;
//   console.log(num);
// }

/////// question 4 ///////
/*
Build a program that asks the user to enter the length and width of a room in meters, and
then logs the area of the room to the console in both square meters and square feet.
Note: 1 square meter == 10.7639 square feet
Do not worry about validating the input at this time. Use the readlineSync.prompt method
to collect user input.
*/

// const readline = require('readline-sync');

// const SQMETERS_TO_SQFEET = 10.7639;

// // asks user for length in meters
// console.log("Enter the length of the room in meters: ");
// let length = Number(readline.question());
// console.clear();

// // asks user for width in meters
// console.log("Enter the width of the room in meters: ");
// let width = Number(readline.question());
// console.clear();

// // calculates square meters
// console.log("Calculating...");
// let squareMeters = width * length;

// // calcuates squre feet
// let squareFeet = squareMeters * SQMETERS_TO_SQFEET;

// // display result
// console.log(`Your room is ${squareMeters.toFixed(2)} square meters and ${squareFeet.toFixed(2)} square feet.`);

/////// question 5 ///////
// Create a simple tip calculator. The program should prompt for a bill amount and a 
// tip rate. The program must compute the tip, and then log both the tip and the total 
// amount of the bill to the console. You can ignore input validation and assume that 
// the user will enter numbers.

// const readline = require('readline-sync');
// // ask user for bill amount
// console.log("How much is your bill");
// let bill = parseFloat(readline.question());
// console.clear();

// // ask user for tip percentage
// console.log("What percentage tip do you want to leave?");
// let tipPercentage = parseFloat(readline.question());
// console.clear();

// // compute tip
// let tip = bill * (tipPercentage / 100);

// // compute total
// let total = bill + tip;

// //display bill amount
// console.log(`Your total is ${total.toFixed(2)}. You are leave a ${tip.toFixed(2)} tip.`);

/////// question 6 ///////
// Write a program that asks the user to enter an integer greater than 0, then asks 
// whether the user wants to determine the sum or the product of all numbers between 
// 1 and the entered integer, inclusive.

// const readline = require('readline-sync');

// // ask user to enter an integer greater than zero
// let num = parseInt(readline.question("Enter an integer greater than zero: \n"));
// //console.log(num);
// // ask user whether she wants the sum or product
// let operation = readline.question(`Would you like the sum or product from 1 to ${num}?\n`);

// // calculate using switch statement and functions
// function sum(num) {
//   let sumNum = 0;
//   let count = 1
//   while (count <= num) {
//     sumNum += count;
//     count++;
//   }
//   return sumNum;
// }

// function product(num) {
//   let prodNum = 1;
//   let count = 1;
//   while (count <= num) {
//     prodNum *= count;
//     count++;
//   }
//   return prodNum;
// }

// let result;

// switch (operation) {
//   case 'sum':
//     result = sum(num);
//     console.log(`${operation} = ${result}`);
//     break;
//   case 'product':
//     result = product(num);
//     console.log(`${operation} = ${result}`);
//     break;
//   default:
//     console.log("Oops. Unknown operation.");
//     break;
// }

/////// question 7 ///////
// Write a function that takes two strings as arguments, determines the length of the two strings, 
// and then returns the result of concatenating the shorter string, the longer string, and the shorter 
// string once again. You may assume that the strings are of different lengths.
// function shortLongShort(str1, str2) {
//   if (str1.length > str2.length) {
//     return str2.concat(str1, str2);
//   } else {
//     return str1.concat(str2, str1);
//   }
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"



/////// question 8 ///////
// In the modern era under the Gregorian Calendar, leap years occur in every year that is 
// evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly 
// divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.
// Assume this rule is valid for any year greater than year 0. Write a function that takes any year 
// greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.
// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

/////// question 9 ///////
// This is a continuation of the previous exercise.
//The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. 
// Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years 
// occur in any year that is evenly divisible by 4.
// Using this information, update the function from the previous exercise to determine 
// leap years both before and after 1752.
// function isLeapYear(year) {
//   if (year % 4 === 0 && year <= 1752) {
//     return true;
//   } else if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

/////// question 10 ///////
/*
Write a function that computes the sum of all numbers between 1 and some other number, inclusive,
that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98
(3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
You may assume that the number passed in is an integer greater than 1.
*/
// function multisum(num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

/////// question 11 ///////
/*
Write a function that determines and returns the UTF-16 string value of a string 
passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of 
every character in the string. (You may use String.prototype.charCodeAt() to determine 
the UTF-16 value of a character.)
*/
function utf16Value(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0