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
    
- line 74, using querySelector for ID not working
    - no numbers to start out css id names? allowable names?

- using debugger. when helpful? How to for vs code. 

- checkForTie() nested arrays with .every()
    - I used .flat() instead
    ```js
    return board.every(v => v.every(c => !!c ));
    ```

- findSpotforCol() - Create version with .findLastIndex()? Which array method is best?
    - when to use else if vs separate if statements?

- GitHub - how to arrange repos for projects?