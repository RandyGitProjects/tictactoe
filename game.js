class Game {
    constructor() {
       this.playerOne = new Player(1, '🥳');
       this.playerTwo = new Player(2, '🥹');
       this.currentPlayer = this.playerOne ;
       this.winner = false;
       this.draw = false;
       this.dataP1 = []
       this.dataP2 = []
       this.winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [2,4,6],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,5,8]
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