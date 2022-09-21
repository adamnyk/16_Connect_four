/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
const board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {  // board = [HEIGHT][WIDTH]
  for (let y = 0; y < HEIGHT; y++) {
    board.push([]);
    for (let x = 0; x < WIDTH; x++) {
      board[y].push(null);
    }
  }
  return board;
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // create "htmlBoard" variable from the item in HTML w/ID of "board"
  const htmlBoard = document.getElementById('board');
  
  // create table row with id of 'column-top', upon click run handleClick
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  // create table cell with id of position 'x' within 'top' row
  for (let x = 0; x < WIDTH; x++) {
    const headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // create the number of table rows as indicated by HEIGHT variable
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    // for each table row, create as many table cells as indicated by WIDTH variable
    // apply a y and x coordinate id to each cell and append to row
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */
function findSpotForCol(x) {
  // cycle through arrays backwards to start with bottom rows
  for (let y = HEIGHT-1; y >= 0; y--) {
    for (let i = WIDTH-1; i >= 0; i--) {
      //return y position if item in column is filled with a flasey value, return null if column is full
      if (i === x) {
        if (!board[y][i]) {
          return y;
        }
        else if (board[0][i]) {
          return null;
        }
      }
    }
  }
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // make a div and insert into correct table cell
  const piece = document.createElement("div");
  piece.classList.add('piece', `p${currPlayer}`);
  const spot = document.getElementById(`${y}-${x}`);
  spot.append(piece);
}

/** handleClick: handle click of column top to play piece */
function handleClick(evt) {
  // get x from ID of clicked cell
  const x = +evt.target.id;
  // get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  if (y === null) {
    return;
  }
  
  // place piece in board and add to HTML table
  placeInTable(y, x);
  
  // Update in-memory board with player number
  board[y][x] = currPlayer;
  
  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }
  
  // check for tie: tie if every cell contains a truthy value
  if (board.flat().every((cell) => !!cell)) {
    return endGame('Tie!');
  }
  
  // switch players: currPlayer 1 <-> 2
  currPlayer = currPlayer === 1 ? 2 : 1;
}

/** endGame: announce game end */
function endGame(msg) {
  setTimeout(()=> alert(msg), 100);
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */
function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (let y = 0; y < HEIGHT; y++) {  
    for (let x = 0; x < WIDTH; x++) { 
      // For each cell create array of winning positions
      // piece positions to win
      const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
      
      // return true if each of the 4 cells in a winning pattern meet conditions of function _win (legal coordinates and same player)
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
