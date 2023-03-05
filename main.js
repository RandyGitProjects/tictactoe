// Global Variables
var playerOneWins = []
var playerTwoWins = []
var game = new Game()

//Query Selectors
var gridArray = document.querySelectorAll(".grid-item")
var gridBoard = document.querySelector(".game-board")

// Event Listeners
gridBoard.addEventListener('click', function(event) {
    if (event.target.matches('.grid-item')) {
      turnGridArray()
      checkWinConditions()
      tokenSwitch()
      console.log(`Clicked grid item with id ${event.target.id}`);
    }
});
  // This function calls the game class currentPlayer and make sure it's player one.
  // after it rings true we update the DOM using innerText and using the player one token
  // If currentPlayer does not = player one we update the DOM using innerText using the player two token
  // After the if statement is finished we switch players using the game.switchPlayer function
  function tokenSwitch() {
    if (game.currentPlayer === game.playerOne) {
      event.target.innerText = game.playerOne.token
      // event.target.style.pointerEvents = 'none'
      // game.dataP1.push(game.playerOne.id)
    }else{
      event.target.innerText = game.playerTwo.token
      // event.target.style.pointerEvents = 'none'
      // game.dataP2.push(game.playerTwo.id)
    }
    game.switchPlayer()
    stopEvent()
  }
  
  function turnGridArray() {
    Object.entries(gridArray)
  }
  function checkWinConditions() {
  for (var i = 0; i < game.winningConditions.length; i++) {
    game.one[event.target.id] = game.currentPlayer.id;
    var firstIndex = game.winningConditions[i][0];
    var secondIndex = game.winningConditions[i][1];
    var thirdIndex = game.winningConditions[i][2];
    if (game.one[firstIndex] === game.currentPlayer.id &&
        game.one[secondIndex] === game.currentPlayer.id &&
        game.one[thirdIndex] === game.currentPlayer.id) {
          console.log(`${game.currentPlayer.token} wins!`);
          game.currentPlayer.thisIncreasedWins()
          game.winner = true 
        }
    }
  }

  function stopEvent() {
    if (game.winner) {
      for (var i = 0; i < gridArray.length; i++) {
        gridArray[i].style.pointerEvents = "none";
      }
    } else {
      for (var i = 0; i < game.one.length; i++) {
        if (game.one[i] === '' ) {
          event.target.style.pointerEvents = 'none';
        }
      }
    }
  }
