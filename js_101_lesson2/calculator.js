// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return Number.isNaN(Number(num));
}

let calculating = true;

prompt(MESSAGES["welcome"]);

while (calculating) {

  prompt(MESSAGES["firstNumber"]);

  let number1 = Number(readline.question());

  while (invalidNumber(number1)) {
    prompt(MESSAGES["invalidNumber"]);
    number1 = readline.question();
  }

  prompt(MESSAGES["secondNumber"]);
  let number2 = Number(readline.question());

  while (invalidNumber(number2)) {
    prompt(MESSAGES["invalidNumber"]);
    number2 = readline.question();
  }

  prompt(MESSAGES["operation"]);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES["invalidOp"]);
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

  prompt(MESSAGES["playAgain"]);

  let playAgain = readline.question();

  while (!['y', 'n'].includes(playAgain.toLowerCase())) {
    prompt(MESSAGES["yN"]);
    playAgain = readline.question();
  }

  if (playAgain === 'n') {
    calculating = false;
  }

}