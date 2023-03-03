// Global Variables
var playerOneWins = []
var playerTwoWins = []
var playerOne = 'x'
var playerTwo = 'o'
new Game()

//Query Selectors
var gridArray = document.querySelectorAll(".grid-item")
var gridBoard = document.querySelector(".game-board")

// Event Listeners
gridBoard.addEventListener('click', function(event) {
    if (event.target.matches('.grid-item')) {
      turnGridArray()
      tokenText()
      // newEventText()
      console.log(`Clicked grid item with id ${event.target.id}`);
    }
  });
  
  function tokenText() {
  event.target.innerText = playerOne
}

function turnGridArray() {
  var array = Object.entries(gridArray)

}
