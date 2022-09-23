## Present

- upon launch html board and Array board are constructed
- listens for tie or winning combo and gives alert (delay)
- animation for pieces
- gameplay disabled if player wins

### Known Issues & Improvements
- Uncaught Type Error
    - catch errror?
    - would the debugger be helpful for this?

- better solution for findSpotForCol(x) via solution
    ```js
        function findSpotForCol(x) {
    for (let y = HEIGHT - 1; y >= 0; y--) {
        if (!board[y][x]) {
        return y;
        }
    }
    return null;
    }
    ```

- New game button
- Refactor to Obj oriented version, classes
- styling, winning combo hilight, set colors
- applying flexbox & honing animations

## Code Review Questions

- wrap into an if. if spot, spot.append

- Feedback on comments & variable names?
    - should explain and negate need for comments

- Feecback on code?
    - method name should be self explanitory
    - no no inline comments
    - occasionally you can put before a section, but try not to


-   PRESENTING & STORYTELLING
    - organize code to be natural in story
    - dont read line by line
    - practice with mentor, TA, on demand, etc.
    - nested loops suck for performance
    - ONE CALL A DAY FOR ON DEMAND MENTOR, CODE REVIEW...
    - GAME START @ BOTTOM OF CLASS

# Step One: Planning

## Before looking at our code, take a few minutes to think about how you would build a game like this using HTML/JS/CSS:

    - what HTML would be useful for the game board itself?
        div, tables, tr, td, top row

    - how could you represent a played-piece in the HTML board?
        insert new div element?
        background color with large radius?

    - in the JavaScript, what would be a good structure for the in-memory game board?
        array of arrays, order matters, index

    - what might the flow of the game be?
        create board
        play alternating circles
        listen for win
            send alert after delay of playing last pice
            say which player won
            hilight winning sequence
            stop further play
        listen for tie & send alert

    - Then, write down some functions names/descriptions that would be useful for this game.
        watchForWin()
        watchForTie()
        playPice()

## ES2015

    - √ let / const
    - arrow funcs
    - rest / spread
    - destructuring



## QUESTIONS
    

- ~~checkForTie() nested arrays with .every()~~
    - dont need v!! can just do v
    - I used .flat() instead
    ```js
    return board.every(v => v.every(c => !!c ));
    ```

- ~~findSpotforCol() - Create version with .findLastIndex()? Which array method is best?~~
    - when to use else if vs separate if statements?

- GitHub - how to arrange repos for projects?

- README feedback

- using debugger. when helpful? How to for vs code. 

- :131 _win(cells) // Why underscores in function name? What are cells?

- ~~Dont understand Solutions version of makeBoard :18~~
    ```js
    function makeBoard() {
    for (let y = 0; y < HEIGHT; y++) {
        board.push(Array.from({ length: WIDTH }));
    }
    }
    ```
    - you can use Array.from on an array like object with a length property see here and search for 'length' -> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 

- better solution for findSpotForCol(x) via solution
    ```js
        function findSpotForCol(x) {
    for (let y = HEIGHT - 1; y >= 0; y--) {
        if (!board[y][x]) {
        return y;
        }
    }
    return null;
    }
    ```

    ```js
    // Old version
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
    ```
- more concise comments, stick to functionality not code

- Animation: 
    - adding custom easing function, like a bounce?
    - learning more about keyframes
    - dropping piece from top of table, not the whole page

- **Destructuring** review how it works, see checkForWin func.

- catch error message for place in column