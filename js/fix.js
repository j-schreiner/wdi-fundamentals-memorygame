console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardthree);

var cards = [
{
rank : "queen",
suit : "hearts",
cardImage :	"images/queen-of-hearts.png"
},
{
rank : "queen",
suit : "diamonds",
cardImage :	"images/queen-of-diamonds.png"	
},
{
rank : "king",
suit : "hearts",
cardImage :	"images/king-of-hearts.png"	
},
{
rank : "king",
suit : "diamonds",
cardImage :	"images/king-of-diamonds.png"	
}
];

var cardsInPlay = [];

var checkForMatch = (){
	if(cardsInPlay[0] === cardsInPlay[1]){
	alert: alert("You found a match!");
	} else{
	alert("Sorry try again.");
	}	
}

var flipCard = function(cardId){

	if(cardsInPlay.length === 2){
	checkForMatch();
	};

	console.log("User flipped" + "" + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cardImage);
	console.log(suit);
}

flipcard(0);
flipcard(2);


