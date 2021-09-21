// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

console.log("Welcome to the Calculator!");

console.log("What is the first number?");
let number1 = Number(readline.question());

console.log("What is the second number?");
let number2 = Number(readline.question());

//console.log(`${number1} ${number2}`);

console.log("Enter a number 1-4 to indicate which operation you would like to perform:\n1) Add\n2) Subtract\n3) Multiply\n4) Divide");
let operation = readline.question();

let output;

switch (operation) {
  case ('1'):
    output = number1 + number2;
    break;
  case ('2'):
    output = number1 - number2;
    break;
  case ('3'):
    output = number1 * number2;
    break;
  case ('4'):
    output = number1 / number2;
    break;
  default:
    console.log("Invalid option.");
}

if (output) {
  console.log("Your result is: " + output);
} else {
  console.log("Try again with valid input! Goodbye!");
}

