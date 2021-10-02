/*
Display the initial empty 3x3 board.
Ask the user to mark a square.
Computer marks a square.
Display the updated board state.
If it's a winning board, display the winner.
If the board is full, display tie.
If neither player won and the board is not full, go to #2
Play again?
If yes, go to #1
Goodbye!
*/

/*
function to display board
*/
function displayBoard(board) {
  console.log('     |     |     ');
  console.log(` ${board['1']}   |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(` ${board['4']}   |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(` ${board['7']}   |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |     ');
}

/*
initialize board
*/
function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }
  return board;
}

/*
board
*/
let board = initializeBoard();



