class Game {
    constructor() {
       this.playerOne = new Player(1, 'X');
       this.playerTwo = new Player(2, 'O');
       this.currentPlayer = this.playerOne ;
       this.winner = false;
       this.draw = false;
       this.one = new Array(9).fill(null)
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

    checkWinConditions() {
      for (var i = 0; i < game.winningConditions.length; i++) {
        game.one[event.target.id] = game.currentPlayer.id;
        var firstIndex = game.winningConditions[i][0];
        var secondIndex = game.winningConditions[i][1];
        var thirdIndex = game.winningConditions[i][2];
        if (game.one[firstIndex] === game.currentPlayer.id &&
            game.one[secondIndex] === game.currentPlayer.id &&
            game.one[thirdIndex] === game.currentPlayer.id) {
              game.currentPlayer.thisIncreasedWins()
              game.winner = true 
            }
        }
      }

    switchPlayer() {
      if(!game.winner) {
      if (this.currentPlayer === this.playerOne) {
          this.currentPlayer = this.playerTwo;
        } else {
          this.currentPlayer = this.playerOne;
        }
      }
    }
      
    checkDraw() {
      if (amountOfTurns === gridArray.length && !game.winner) {
        draw.innerText = "Game is a draw!"
        game.draw = true
      }
    }
    
    resetGame() {

    }
}