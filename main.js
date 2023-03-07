// Global Variables
var game = new Game();
var amountOfTurns = 0;

//Query Selectors
var gridBoard = document.querySelector(".game-board");
var gridArray = document.querySelectorAll(".grid-item");
var gridClear = document.querySelectorAll(".grid-item");
var draw = document.querySelector(".main-text");
var winner = document.querySelector(".main-text");
var playerTurn = document.querySelector(".main-text");
var oneWins = document.querySelector(".player-one-wins");
var twoWins = document.querySelector(".player-two-wins");

// Event Listeners
gridBoard.addEventListener("click", function(event) {
  if (event.target.matches(".grid-item")) {
    if (game.checkWinConditions()) {
      tokenSwitch();
      displayWinner();
      displayWins();
      resetAll();
    } else {
      tokenSwitch();
      resetAll();
    }
  }
});

//Functions
  function tokenSwitch() {
    if (game.currentPlayer === game.playerOne) {
      event.target.innerText = game.playerOne.token;
    } else {
      event.target.innerText = game.playerTwo.token;
    }
    amountOfTurns += 1;
    stopEvent();
    game.switchPlayer();
    displayPlayersTurn();
    game.checkDraw();
  }


  function doNothing() {
  }

  function stopEvent() {
    if (game.winner || game.draw) {
      for (var i = 0; i < gridArray.length; i++) {
        gridBoard.removeEventListener("click", doNothing);
        gridArray[i].style.pointerEvents = "none";
      }
    } else {
      for (var i = 0; i < game.one.length; i++) {
        if (game.one[i] === null ) {
          event.target.style.pointerEvents = "none";
        }
      }
    }
  }

  function displayWinner() {
    winner.innerText = `Congratulations player ${game.currentPlayer.token} wins!`;
  }

  function displayWins() {
    oneWins.innerText = `${game.playerOne.wins} wins`;
    twoWins.innerText = `${game.playerTwo.wins} wins`;
  }

  function displayPlayersTurn() {
      playerTurn.innerText = `It's player ${game.currentPlayer.token}'s turn`;
  }

  function resetAll() {
    if (game.winner || game.draw) {
      setTimeout(function() {
        game.winner = false;
        game.draw = false;
        amountOfTurns = 0;
        resetGameBoard();
        game.one = new Array(9).fill(null);
        game.switchPlayer();
        resetClick();
        displayPlayersTurn();
      }, 4000);
    }
  }

  function resetGameBoard() {
    for (let i = 0; i < gridArray.length; i++) {
    var gridSquare = document.getElementById(`${i}`);
      gridSquare.innerText = "";
    }
  }

  function resetClick() {
    for (let i = 0; i < gridArray.length; i++) {
      gridArray[i].style.pointerEvents = "auto";
    }
  }


