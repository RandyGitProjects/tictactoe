// Global Variables
var game = new Game()
var amountOfTurns = 0

//Query Selectors
var gridArray = document.querySelectorAll(".grid-item")
var gridClear = document.querySelectorAll(".grid-item")

var gridBoard = document.querySelector(".game-board")
var draw = document.querySelector("h1")
var winner = document.querySelector("h1")
var playerTurn = document.querySelector("h1")
var oneWins = document.querySelector(".player-one-wins")
var twoWins = document.querySelector(".player-two-wins")



// Event Listeners
gridBoard.addEventListener('click', function(event) {
  if (event.target.matches('.grid-item')) {
    game.checkWinConditions()
    Results()
    tokenSwitch()
    displayWins()
    displayPlayersTurn()
    displayWinner()
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
  } else {
    event.target.innerText = game.playerTwo.token
  }
  game.switchPlayer()
  amountOfTurns += 1
  stopEvent()
  game.checkDraw()
}

function stopEvent() {
  if (game.winner || amountOfTurns === gridArray.length) {
    for (var i = 0; i < gridArray.length; i++) {
      gridBoard.removeEventListener('click', tokenSwitch);
      gridArray[i].style.pointerEvents = "none";
    }
  } else {
    for (var i = 0; i < game.one.length; i++) {
      if (game.one[i] === null ) {
        event.target.style.pointerEvents = 'none';
      }
    }
  }
}

function displayWinner() {
  if (game.winner === true) {
    winner.innerText = `Congratulations player ${game.currentPlayer.token} wins!`
  }
}

function displayWins() {
  oneWins.innerText = `${game.playerOne.wins} wins`
  twoWins.innerText = `${game.playerTwo.wins} wins`
}

function displayPlayersTurn() {
  if (game.currentPlayer === game.playerOne) {
    playerTurn.innerText = `It's player ${game.currentPlayer.token}'s turn`
  } else {
    playerTurn.innerText = `It's player ${game.currentPlayer.token}'s turn`
  }
}

function Results() {
  if (game.winner || amountOfTurns === gridArray.length) {
    setTimeout(function() {
      game.winner = false;
      game.draw = false;
      game.one = new Array(9).fill(null);
      playerTurn.innerText = `It's player ${game.currentPlayer.token}'s turn`
      resetGameBoard()
      console.log("it worked")
    }, 4000)
  }
}

// function resetGameBoard() {
//   for (var i = 0; i < game.one; i++) {
//     if (gridArray.innerText )
//     gridClear.innerText = game.one[i]
//   }
// }


