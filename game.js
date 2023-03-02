class game {
    constructor(playerOne, playerTwo) {
       this.playerOne = playerOne;
       this.playerTwo = playerTwo;
       this.currentPlayer = playerOne;
       this.winner = false;
    }
    gameData() {

    }

    switchPlayer() {
    if (this.currentPlayer === this.player1) {
        this.currentPlayer = this.player2;
      } else {
        this.currentPlayer = this.player1;
      }
    }

    winningConditions() {
        return[
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [3,5,7],
            [1,5,9],
            [1,4,7],
            [2,5,8],
            [3,6,9]
        ]
        
    }

    drawConditions() {

    }
    
    resetGame() {

    }
}