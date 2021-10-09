/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/

const readline = require('readline-sync');

let deck = [];
let playerHand = [];
let computerHand = [];
let playerScore = 0;
let computerScore = 0;
let winner = false;

/* prompt function */
function prompt(msg) {
  console.log(`=> ${msg}`);
}

/* add cards to deck; helper function for initializeCards() */
function addCard(card, num) {
  for (let i = 0; i < num; i++) {
    deck.push(card);
  }
}

/* initialize deck */
function initializeCards() {
  for (let i = 1; i < 11; i++) {
    if (i == 1) {
      addCard('A', 4);
      continue;
    }
    if (i < 10) {
      addCard(i, 4);
    } else {
      addCard('J', 4);
      addCard('Q', 4);
      addCard('K', 4);
    }
  }
}

/* clear deck */
function clearDeck() {
  deck.splice(0, deck.length);
}

/* shuffle deck */
function shuffle() {
  for (let i = 0; i < deck.length; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
  }
}

/* deal two cards to each player */
function deal() {
  for (let i = 0; i < 2; i++) {
    playerHand.push(deck.shift());
    computerHand.push(deck.shift());
  }
}

/* hit or stay? */
function hitOrStay() {
  playerScore = total(playerHand);
  while (!busted()) {
    prompt(`Your current score is: ${playerScore}`);
    prompt("human: do want to hit or stay?");
    let answer = readline.question();
    if (answer === 'stay') break;
    hit(playerHand);
    showPlayerHand();
  }
  if (busted()) {
    console.clear();
    prompt(`BUSTED! Your final score was ${playerScore}`);
    displayWinnerAfterBust();
  } else {
    prompt("You chose to stay!");  // if player didn't bust, must have stayed to get here
    prompt(`Your current score is: ${playerScore}`);
  }
}

function computerDecides() {
  if (computerScore < 17) {
    return 'hit';
  }
  return 'stay';
}

/* dealer turn */
function dealerTurn() {
  console.clear();
  computerScore = total(computerHand);
  prompt(`Computer turn! Computer score: ${computerScore}`);
  while (true) {
    computerScore = total(computerHand);
    let answer = computerDecides();
    if (answer === 'stay' || computerBusted()) break;
    hit(computerHand);
  }
  if (computerBusted()) {
    prompt(`BUSTED! Computer final score was ${computerScore}`);
    displayWinnerAfterBust();
  } else {
    prompt(`Computer chose to stay! Computer score: ${computerScore}`);  // if player didn't bust, must have stayed to get here
  }
}

/* hit */
function hit(handOfCards) {
  handOfCards.push(deck.shift());
}

/* calculate cards */
function total(handOfCards) {
  let values = handOfCards.slice(0, handOfCards.length);
  let sum = 0;
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });
  // correct for Aces
  values.filter(value => value === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });
  return sum;
}

/* bust detector */
function busted() {
  playerScore = total(playerHand);
  if (playerScore > 21) return true;
  return false;
}

/* bust detector */
function computerBusted() {
  if (computerScore > 21) return true;
  return false;
}

/* initial message to player */
function initialMessage() {
  console.clear();
  prompt('Welome to 21!');
  prompt('You and the computer will each be dealt two cards.');
  prompt('You will get to see one of the computer\'s cards.');
  prompt('You see both of your cards.');
  prompt('Decide if you want to hit or stay.');
  prompt('If you go over 21, you bust, and the computer wins.');
  prompt('Good luck!');
  console.log("");
}
/* show player hand */
function showPlayerHand() {
  prompt(`Your cards are: ${playerHand.join(', ')}`)
}
/* show computer card */
function showComputerCard() {
  randomIndex = Math.floor(Math.random() * computerHand.length)
  prompt(`Computer card: ${computerHand[randomIndex]}`);
}
/* function to start game */
function begin() {
  while (true) {
    prompt('Press enter to begin');
    let begin = readline.question();
    console.clear();
    break;
  }
}

function displayWinnerAfterBust() {
  if (playerScore > 21 && computerScore < 21) {
    prompt('Computer won because you BUSTED!');
  } else if (computerScore > 21 && playerScore < 21) {
    prompt('You won because the computer BUSTED!');
  }
}

function displayWinnerAfterGame() {
  if (playerScore > computerScore && computerScore < playerScore) {
    prompt(`You won by ${playerScore - computerScore} points!`)
  } else if (playerScore < computerScore && computerScore > playerScore) {
    prompt(`Computer won with ${computerScore - playerScore} points!`)
  } else {
    prompt(`It's a tie!`);
  }
}

function playAgain() {
  console.log('-------------');
  prompt('Do you want to play again? (y or n)');
  let answer = readline.question();
  return answer.toLowerCase()[0] === 'y';
}

function resetHands() {
  playerHand.splice(0, playerHand.length);
  computerHand.splice(0, computerHand.length);
}

function resetScores() {
  playerScore = total(playerHand);
  computerScore = total(computerHand);
}

/////////////////* GAME LOOP */////////////////
while (true) {

  initialMessage();
  resetHands();
  resetScores();
  begin();
  initializeCards();
  shuffle();
  deal();

  while (true) {
    showPlayerHand();
    showComputerCard();
    hitOrStay();
    if (busted()) break;
    dealerTurn();
    if (computerBusted()) break;
    displayWinnerAfterGame(); break;

  }

  if (!playAgain()) break;

}





