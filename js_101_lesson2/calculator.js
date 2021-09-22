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

prompt("Choose English or Spanish. Type 'en' or 'es': ");
let language = readline.question();

while (!['en', 'es'].includes(language)) {
  prompt(MESSAGES["Enter 'en' or 'es': "]);
  language = readline.question();
}

prompt(MESSAGES[`${language}`]["welcome"]);

while (calculating) {

  prompt(MESSAGES[`${language}`]["firstNumber"]);

  let number1 = Number(readline.question());

  while (invalidNumber(number1)) {
    number1 = readline.question();
  }

  prompt(MESSAGES[`${language}`]["secondNumber"]);
  let number2 = Number(readline.question());

  while (invalidNumber(number2)) {
    prompt(MESSAGES[`${language}`]["invalidNumber"]);
    number2 = readline.question();
  }

  prompt(MESSAGES[`${language}`]["operation"]);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES[`${language}`]["invalidOp"]);
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

  prompt(MESSAGES[`${language}`]["playAgain"]);

  let playAgain = readline.question();

  while (!['y', 'n'].includes(playAgain.toLowerCase())) {
    prompt(MESSAGES[`${language}`]["yN"]);
    playAgain = readline.question();
  }

  if (playAgain === 'n') {
    calculating = false;
  }

}