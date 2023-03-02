// Global Variables
var playerOneWins = []
var playerTwoWins = []
var playerOne = "X"
var playerTwo = "O"

//Query Selectors
// var playerOne = document.querySelector(".left-bar")
// var playerTwo = document.querySelector(".right-bar")
// var boxOne = document.querySelector("#grid-one")
// var boxTwo = document.querySelector(".grid-two")
// var boxThree = document.querySelector(".grid-three")
// var boxFour = document.querySelector(".grid-four")
// var boxFive = document.querySelector(".grid-five")
// var boxSix = document.querySelector(".grid-six")
// var boxSeven = document.querySelector(".grid-seven")
// var boxEight = document.querySelector(".grid-eight")
// var boxNine = document.querySelector(".grid-nine")
var emojiDisplay = document.querySelector(".grid-item")
var chosenEmoji = document.querySelector('select')
var gridBoard = document.querySelector(".game-board")
var currentEmoji = document.querySelector("#current-emoji")

// Event Listeners
gridBoard.addEventListener('click', function(event) {
    if (event.target.matches('.grid-item')) {
      switchPlayer()
      event.target.textContent = currentPlayer
        // Show clicked grid item
          console.log(`Clicked grid item with id ${event.target.id}`);
    }
  });

  function emoji() {
    emojiDisplay.innerHTML = chosenEmoji.value
  }

  function changeEmojiValue() {
    currentEmoji.innerText = chosenEmoji.value;
  };



// function chosenBox(event) {
//     if(event.target.idName === "grid-one") {
//         var gridEmoji = event.target.parentNode
//         gridEmoji = emojiDisplay.appendChild(document.createElement("p"));
//         gridEmoji.classList.add('chosen-emoji');
//         gridEmoji.innerHTML = chosenEmoji.value



// }