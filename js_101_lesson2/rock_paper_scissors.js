// ask user for their move
// computer chooses a move
// display who won as the result

const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];

const VALID_INITIALS = ['r', 'p', 's', 'l', 'S'];

let playerScore = 0;
let computerScore = 0;

function updateScores(choice, computerChoice) {
  if ((choice === 's' && (computerChoice === 'p' || computerChoice === 'l')) ||
    (choice === 'p' && (computerChoice === 'r' || computerChoice === 'S')) ||
    (choice === 'r' && (computerChoice === 'l' || computerChoice === 's')) ||
    (choice === 'l' && (computerChoice === 'S' || computerChoice === 'p')) ||
    (choice === 'S' && (computerChoice === 's' || computerChoice === 'r'))) {
    playerScore++;
  } else if (choice === computerChoice) {
    playerScore++;
    computerScore++;
  } else {
    computerScore++;
  }
}

function displayMatchOutcome(choice, computerChoice) {
  let playerWord = VALID_CHOICES[VALID_INITIALS.indexOf(choice)];
  let computerWord = VALID_CHOICES[VALID_INITIALS.indexOf(computerChoice)];
  prompt(`You chose ${playerWord}. The computer chose ${computerWord}.`);
}

function displayWinner(playerPoints, computerPoints) {
  if (playerPoints > computerPoints && computerPoints < playerPoints) {
    prompt("You win!");
  } else if (computerPoints > playerPoints && playerPoints < computerPoints) {
    prompt("The computer wins!");
  } else {
    prompt("It's a tie!");
  }
}

function displayScore(playerScore, computerScore) {
  prompt(`Your score: ${playerScore}`);
  prompt(`Computer score: ${computerScore}`);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

let playing = true;
let noWinner = true;

while (playing) {

  playerScore = 0;
  computerScore = 0;
  noWinner = true;
  console.clear();

  while (noWinner) {

    prompt(`Choose one: ${VALID_CHOICES.join(', ')}\n \
    Type only the first initial of your choice: r, p, s, l, S.\n \
    Note that Spock is a capital S.`);
    let playerChoice = readline.question();

    while (!VALID_INITIALS.includes(playerChoice)) {
      prompt("Hmmm. That doesn't look like a valid choice. Try again!");
      playerChoice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_INITIALS.length);
    let computerChoice = VALID_INITIALS[randomIndex];

    updateScores(playerChoice, computerChoice);
    displayMatchOutcome(playerChoice, computerChoice);

    if (playerScore >= 3 || computerScore >= 3) {
      displayScore(playerScore, computerScore);
      displayWinner(playerScore, computerScore);
      noWinner = false;
    } else {
      displayScore(playerScore, computerScore);
      prompt("");
    }
  }
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') {
    playing = false;
  }
}