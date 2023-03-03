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
      toeknSwitch()
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
    }else{
      event.target.innerText = game.playerTwo.token
    }
    game.switchPlayer()
  }

function turnGridArray() {
  var array = Object.entries(gridArray)

}
