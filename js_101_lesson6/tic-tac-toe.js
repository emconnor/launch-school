// global vars

const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const BEST_SQUARE = '5';
const MATCH_NUM = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

const playerChoices = ['player', 'computer', 'choose'];

let firstPlayer;
let currentPlayer;
let scores = { Player: 0, Computer: 0 };

let board = {};

function chooseFirstPlayer() {
  while (true) {
    prompt('Choose a player to go first: player, computer, or choose');
    firstPlayer = readline.question().trim().toLowerCase();
    if (playerChoices.includes(firstPlayer)) break;
    prompt("Sorry, that's not a valid choice.");
  }
  if (firstPlayer === 'choose') {
    let randomIndex = Math.floor(Math.random() * playerChoices.length);
    firstPlayer = playerChoices[randomIndex];
  }
  return firstPlayer;
}

function swapPlayer() {
  if (currentPlayer === 'computer') {
    return 'player';
  }
  return 'computer';
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function resetScores() {
  scores['Player'] = 0;
  scores['Computer'] = 0;
}

function displayBoard() {

  if (scores['Player'] === 0 && scores['computer'] === 0) console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares() {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function joinOr(array, delimiter = ', ', conjunction = 'or ') {
  let result = "";
  for (let index = 0; index < array.length; index++) {
    if (array.length === 1) {
      result += array[index];
      break;
    }
    if (array.length === 2) {
      result += array[index] + ' ' + conjunction + array[index + 1];
      break;
    }
    if (index === array.length - 2 && array.length >= 3) {
      result += array[index] + delimiter + conjunction;
      continue;
    }
    if (index === array.length - 1) {
      result += array[array.length - 1];
      continue;
    }
    result += array[index] + delimiter;
  }
  return result;
}

function playerChoosesSquare() {
  displayBoard();
  let square;
  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares())}):`);
    square = readline.question().trim();
    if (emptySquares().includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
  console.clear();
}

function computerChoosesSquare() {
  // will evalute computerAI COMPUTER_MARKER (offense) first and return
  // then evaluate HUMAN_MARKER (defense)
  // then BEST_SQUARE (five)
  if (computerAI(COMPUTER_MARKER) || computerAI(HUMAN_MARKER)) {
    //return;
  } else if (emptySquares().includes(BEST_SQUARE)) {
    board[BEST_SQUARE] = COMPUTER_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares().length);
    let square = emptySquares()[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function findAtRiskSquare(subArray, marker) {
  let count = 0;
  for (let num in subArray) {
    if (board[subArray[num]] === marker) {
      count++;
    }
  }
  return (count === 2);
}

function computerAI(marker) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let subArray = WINNING_LINES[line];
    if (findAtRiskSquare(subArray, marker)) {
      for (let num in subArray) {
        if (emptySquares().includes(String(subArray[num]))) {
          let square = String(subArray[num]);
          board[square] = COMPUTER_MARKER;
          return true;
        }
      }
    }
  }
  return false;
}

function boardFull() {
  return emptySquares().length === 0;
}

function someoneWon() {
  return detectWinner();
}

function detectWinner() {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function updateScore(player) {
  scores[`${player}`]++;
}

function detectMatchWinner() {
  if (scores['Player'] === MATCH_NUM || scores['Computer'] === MATCH_NUM) return true;
}

function displayMatchWinner() {
  if (scores['Player'] > scores['Computer'] && scores['Computer'] !== scores['Player']) {
    return 'You';
  }
  // else (scores['Player'] < scores['Computer'] && 
  //scores['Computer'] !== scores['Player']) {
  //   return 'Computer';
  // }
  return 'Computer';
}

function displayScore() {
  console.log('');
  prompt(`Your score: ${scores['Player']}`);
  prompt(`Computer's score: ${scores['Computer']}`);
  console.log('');
}

function takesATurn(player) {

  if (player === 'computer') {
    computerChoosesSquare();
  } else {
    playerChoosesSquare();
  }

  if (someoneWon() || boardFull()) {
    displayBoard();
    if (someoneWon()) {
      updateScore(detectWinner());
      prompt(`${detectWinner()} won!`);
      displayScore(scores);
      board = initializeBoard();
    } else {
      prompt("It's a tie!");
      displayScore(scores);
      board = initializeBoard();
    }
  }
}

function playAgain() {
  let response = '';
  let validYN = ['y', 'n'];
  while (true) {
    prompt('Play again? Y / N?');
    response = readline.question().trim().toLowerCase();
    if (validYN.includes(response)) break;
    prompt("Sorry, that's not a valid choice.");
  }
  if (response === 'y') return true;
  return false;
}

function initialMessage() {
  console.log("");
  prompt('Welcome! The first player to 5 wins!');
  console.log("");
}
/////////////////////////////// GAME LOOP //////////////////////////
while (true) {
  board = initializeBoard();
  resetScores();
  initialMessage();
  firstPlayer = currentPlayer = chooseFirstPlayer();

  while (true) {

    if (detectMatchWinner()) break;

    takesATurn(currentPlayer);
    if (detectMatchWinner()) {
      break;
    }
    currentPlayer = swapPlayer();
  }

  prompt(`${displayMatchWinner(scores)} won the match!`);

  if (!playAgain()) break;

}

prompt('Thanks for playing Tic Tac Toe!');