// Global Variables
var playerOneWins = []
var playerTwoWins = []
var playerStart = "P1"

//Query Selectors
playerOne = document.querySelector(".left-bar")
playerTwo = document.querySelector(".right-bar")
var boxOne = document.querySelector(".grid-one")
var boxTwo = document.querySelector(".grid-two")
var boxThree = document.querySelector(".grid-three")
var boxFour = document.querySelector(".grid-four")
var boxFive = document.querySelector(".grid-five")
var boxSix = document.querySelector(".grid-six")
var boxSeven = document.querySelector(".grid-seven")
var boxEight = document.querySelector(".grid-eight")
var boxNine = document.querySelector(".grid-nine")
var emojiDisplay = document.querySelector(".emoji")
var chosenEmoji = document.querySelector('select')

// Event Listeners
boxOne.addEventListener("click", chosenBox)
// boxTwo.addEventListener("click", chosenBox)

//Functions
function showEmoji() {
    emojiDisplay.innerHTML += `<p class="chosen-emoji>"${chosenEmoji.value}</p>`
}

function chosenBox(event) {
    if(event.target.className === "grid-one")
    var gridEmoji = event.target.parentNode
    gridEmoji = emojiDisplay.innerHTML += `<p class="chosen-emoji>"${chosenEmoji.value}</p>`
    alert('WOOOO grid One')
    // for (var i = 0; i < box.length; i++) {
    //     box[i].addEventListener("click", function() {
    //     })
    // }
}

// function switchPlayer(currentPlayer) {
//     if (currentPlayer === "P1") {
//         playerStart = "P2"
//     } else {
//         playerStart = "P1"
//     }

// }