class Game {
    constructor() {
       this.playerOne = new Player(1, '🥳');
       this.playerTwo = new Player(2, '🥹');
       this.currentPlayer = this.playerOne ;
       this.winner = false;
       this.draw = false;
       this.data = []
       this.winningConditions = [
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
    switchPlayer() {
      if (this.currentPlayer === this.playerOne) {
          this.currentPlayer = this.playerTwo;
          console.log("Current Player is 2!")
        } else {
          this.currentPlayer = this.playerOne;
          console.log('Current Player is 1!')
        }
      }
      
    drawConditions() {

    }
    
    resetGame() {

    }
}