// ask user for their move
// computer chooses a move
// display who won as the result

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];


function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
let playerChoice = readline.question();

while (!VALID_CHOICES.includes(playerChoice)) {
  prompt("Hmmm. That doesn't look like a valid choice. Try again!");
  playerChoice = readline.question();
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

prompt(`You chose ${playerChoice}. The computer chose ${computerChoice}.`);