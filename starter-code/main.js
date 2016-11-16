console.log("JS file is connected to HTML! Woo!")

// JS card array.
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

//locates board setting it to a variable so cards can be added
var board = document.getElementById('game-board');
function createBoard() { //board creation
  for (var i=0; i<cards.length; i++) { //loops through avaliable cards to produce card element
    var cardElement = document.createElement('div'); //creates div element for the cards
    cardElement.className = 'card'; //CSS link for styling
    // this will set the card's 'data-card' to be the element of the array
	// data- attributes are meant to store data about an element that is not
	// tied to a style.
	cardElement.setAttribute('data-card', cards[i]);
	// when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement); //appends cards to the board
  }
}

//checks to see if there are cards in play
function isTwoCards() {
  // add card to array of cards in play
  cardsInPlay.push(this.getAttribute('data-card'));
  //card image
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
  	this.innerHTML = "<img src='king.png' alt='King of Diamonds'>"; 
	} else {
		this.innerHTML = "<img src='queen.png' alt='Queen of Diamonds'>"; 
	}
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];

  }
}

//function alert for matching pair
function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

createBoard();