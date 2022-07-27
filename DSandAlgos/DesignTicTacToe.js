// Assume the following rules are for the tic-tac-toe game on an n x n board between two players:

    // A move is guaranteed to be valid and is placed on an empty block.
    // Once a winning condition is reached, no more moves are allowed.
    // A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.

// Implement the TicTacToe class:
    // TicTacToe(int n) Initializes the object the size of the board n.
    // int move(int row, int col, int player) Indicates that the player with id player plays at the cell (row, col) of the board. The move is guaranteed to be a valid move.

class TicTacToe {
    constructor(n) {
        this.n = n
        this.rows = new Array(n).fill(0) // [0, 0, 0]
        this.cols = new Array(n).fill(0) // [0, 0 ,0]
        this.diag = 0
        this.antidiag = 0
    }

    move(row, col, player) {
        let playerMark = player == 1 ? 1 : -1
        this.rows[row] += playerMark
        this.cols[col] += playerMark

        if (col == row) this.diag += playerMark
        if (col + row == this.n) this.antidiag += playerMark

        let wRow = Math.abs(this.rows[row]), wCol = Math.abs(this.cols[col]), wDiag = Math.abs(this.diag), wAnti = Math.abs(this.antidiag)

        if (wRow === n || wCol === n || wDiag === n || wAnti === n) return player
        return 0
    }
}

let game = new TicTacToe(3)
game.move(0, 0, 1) //col == row => diag=1, antidiag=0, rows:[1,0,0] col:[1,0,0] 
    // [1, 0, 0]
    // [0, 0, 0]
    // [0, 0, 0]
game.move(2, 2, 0) //col == row => diag=2, antidiag=0, rows:[1,0,-1] col:[1,0,-1]
    // [1, 0, 0]
    // [0, 0, 0]
    // [0, 0, -1]

game.move(0, 2, 1) //col + row == n => diag=2 antidiag = 1, rows:[2,0,-1] col:[1,0,0]
    // [1, 0, 1]
    // [0, 0, 0]
    // [0, 0, -1]

game.move(2, 1, -1) //diag = 2 antidiag = 1, rows: [2, 0, -2] col:[1, -1, 0]
    // [1, 0, 1]
    // [0, 0, 0]
    // [0, -1, -1]

game.move(2, 0, 1) //diag = 2 antidiag = 2, rows:[2, 0, -1] columns: [2, -1, 0]
    // [1, 0, 1]
    // [0, 0, 0]
    // [1, -1, -1]

game.move(0, 1, -1) //diag=2, antidiag=2, rows:[1,0,-1] columns:[2,-2,0]
    // [1, -1, 1]
    // [0, 0, 0]
    // [1, -1, -1]

game.move(1,1,1) //diag=3, antidiag=2, rows[1,1,-1] columns:[2,1,0]

console.log(game)