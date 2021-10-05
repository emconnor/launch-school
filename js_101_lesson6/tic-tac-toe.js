// /*
// Display the initial empty 3x3 board.
// Ask the user to mark a square.
// Computer marks a square.
// Display the updated board state.
// If it's a winning board, display the winner.
// If the board is full, display tie.
// If neither player won and the board is not full, go to #2
// Play again?
// If yes, go to #1
// Goodbye!
// */

const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const BEST_SQUARE = '5';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

let scores = { 'Player': 0, 'Computer': 0 };

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function resetScores() {
  scores['Player'] = 0;
  scores['Computer'] = 0;
}

function displayBoard(board) {

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
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
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

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  // will evalute computerAI COMPUTER_MARKER (offense) first and return
  // then evaluate HUMAN_MARKER (defense)
  // then BEST_SQUARE (five)
  if (computerAI(board, COMPUTER_MARKER) || computerAI(board, HUMAN_MARKER)) {
    return;
  } else if (emptySquares(board).includes(BEST_SQUARE)) {
    board[BEST_SQUARE] = COMPUTER_MARKER;
    return;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function findAtRiskSquare(subArray, board, marker) {
  let count = 0;
  for (let num in subArray) {
    if (board[subArray[num]] === marker) {
      console.log(marker);
      count++;
    }
  }
  return (count === 2);
}

function computerAI(board, marker) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let subArray = WINNING_LINES[line];
    if (findAtRiskSquare(subArray, board, marker)) {
      for (let num in subArray) {
        if (emptySquares(board).includes(String(subArray[num]))) {
          let square = String(subArray[num]);
          board[square] = COMPUTER_MARKER;
          return true;
        }
      }
    }
  }
  return false;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {

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
  if (scores['Player'] === 5 || scores['Computer'] === 5) return true;
}

function displayMatchWinner() {
  if (scores['Player'] > scores['Computer'] && scores['Computer'] !== scores['Player']) {
    return 'You';
  } else if (scores['Player'] < scores['Computer'] && scores['Computer'] !== scores['Player']) {
    return 'Computer';
  }
}

function displayScore() {
  console.log('');
  prompt(`Your score: ${scores['Player']}`);
  prompt(`Computer's score: ${scores['Computer']}`);
  console.log('');
}

function initialMessage() {
  console.log("");
  prompt('Welcome! The first player to 5 wins! Good luck!')
  console.log("");
}

while (true) {
  let board = initializeBoard();
  resetScores();
  initialMessage();

  while (true) {
    if (detectMatchWinner()) break;
    displayBoard(board);

    if (detectMatchWinner()) break;
    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) {
      displayBoard(board);
      if (someoneWon(board)) {
        updateScore(detectWinner(board));
        prompt(`${detectWinner(board)} won!`);
        displayScore(scores);
        board = initializeBoard();
      } else {
        prompt("It's a tie!");
        displayScore(scores);
        board = initializeBoard();
      }
    }

    if (detectMatchWinner()) break;
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) {
      displayBoard(board);
      if (someoneWon(board)) {
        updateScore(detectWinner(board));
        prompt(`${detectWinner(board)} won!`);
        displayScore(scores);
        board = initializeBoard();
      } else {
        prompt("It's a tie!");
        displayScore(scores);
        board = initializeBoard();
      }
    }
  }

  prompt(`${displayMatchWinner(scores)} won the match!`);

  prompt('Play again?');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');