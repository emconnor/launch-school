// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return Number.isNaN(Number(num));
}

let calculating = true;

prompt("Welcome to the Calculator!");

while (calculating) {

  prompt("What is the first number?");

  let number1 = Number(readline.question());

  while (invalidNumber(number1)) {
    prompt("Hmmm...that doesn't look like a valid number");
    number1 = readline.question();
  }

  prompt("What is the second number?");
  let number2 = Number(readline.question());

  while (invalidNumber(number2)) {
    prompt("Hmmm...that doesn't look like a valid number");
    number2 = readline.question();
  }

  prompt("Enter a number 1-4 to indicate which operation you would like to perform:\n1) Add\n2) Subtract\n3) Multiply\n4) Divide");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("Must enter a number: 1, 2, 3, or 4.");
    operation = readline.question();
  }

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

  console.log("Your result is: " + output);

  prompt("Would you like to play again? Y/N: ");

  let playAgain = readline.question();

  while (!['y', 'n'].includes(playAgain.toLowerCase())) {
    prompt("Must enter Y/N: ");
    playAgain = readline.question();
  }

  if (playAgain === 'n') {
    calculating = false;
  }

}