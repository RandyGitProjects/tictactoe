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
      tokenText()
      checkGridItem()
      console.log(`Clicked grid item with id ${event.target.id}`);
    }
  });

  function checkGridItem() {
    if (event.target.id) {
      game.switchPlayer()     
    }
  }

  
  function tokenText() {
  event.target.innerText = game.playerOne.token
}

function turnGridArray() {
  var array = Object.entries(gridArray)

}
