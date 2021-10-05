// ask user for their move
// computer chooses a move
// display who won as the result

const readline = require('readline-sync');

const CHOICES = {
  rock: { shorthand: 'r', beats: ['scissors', 'lizard'] },
  paper: { shorthand: 'p', beats: ['rock', 'spock'] },
  scissors: { shorthand: 'sc', beats: ['paper', 'lizard'] },
  lizard: { shorthand: 'l', beats: ['spock', 'paper'], },
  spock: { shorthand: 'sp', beats: ['scissors', 'rock'] },
}

let playerScores = {
  "human": 0,
  "computer": 0
};

function displayMatchOutcome(choice, computerChoice) {
  let playerWord = VALID_CHOICES[VALID_INITIALS.indexOf(choice)];
  let computerWord = VALID_CHOICES[VALID_INITIALS.indexOf(computerChoice)];
  prompt(`You chose ${playerWord}. The computer chose ${computerWord}.`);
}

function displayWinner(playerPoints, computerPoints) {
  if (playerScores["human"] > playerScores["computer"] && playerScores["computer"] < playerScores["human"]) {
    prompt("You win!");
  } else if (playerScores["computer"] > playerScores["human"] && playerScores["human"] < playerScores["computer"]) {
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

function displayBreakLine() {
  console.log("================================================");
}

let playing = true;
let noWinner;

while (playing) {

  playerScore = 0;
  computerScore = 0;
  noWinner = true;
  console.clear();
  prompt(`Welcome to the game!\nChoose one: ${VALID_CHOICES.join(', ')}\nType only the first initial of your\
  choice: r, p, s, l, S.\nNote that Spock is a capital S.\nThe first player to 3 wins!\n`);

  while (noWinner) {

    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let playerChoice = readline.question();

    while (!VALID_INITIALS.includes(playerChoice)) {
      prompt("Hmmm. Type r, p, s, l, or S. Try again!");
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
      displayBreakLine();
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

// const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
// const VALID_INITIALS = ['r', 'p', 's', 'l', 'S'];

// let playerScore;
// let computerScore;

// function updateScores(choice, computerChoice) {
//   if ((choice === 's' && (computerChoice === 'p' || computerChoice === 'l')) ||
//     (choice === 'p' && (computerChoice === 'r' || computerChoice === 'S')) ||
//     (choice === 'r' && (computerChoice === 'l' || computerChoice === 's')) ||
//     (choice === 'l' && (computerChoice === 'S' || computerChoice === 'p')) ||
//     (choice === 'S' && (computerChoice === 's' || computerChoice === 'r'))) {
//     playerScore++;
//   } else if (choice === computerChoice) {
//     playerScore++;
//     computerScore++;
//   } else {
//     computerScore++;
//   }
// }