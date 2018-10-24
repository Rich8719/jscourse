/*

Card Game of War Exercise Part 1.

*/

let suits = ['hearts', 'clubs', 'spades', 'diamonds']
let ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
let deckOfCards = new Array()

function createDeck() {
    class cards {
        constructor(suits, ranks) {
            this.suits = suits;
            this.ranks = ranks;
        }
    }
    ranks.forEach(function (ranks) {
        suits.forEach(function (suits) {
            deckOfCards.push(new cards(ranks, suits))
        })
    })
}

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max - 1)
}

function getRandomCard() {
    randomCard = deckOfCards[generateRandomNumber(deckOfCards.length)]
    console.log(randomCard);
}

createDeck();
getRandomCard();

// Given the above suits and ranks array, write a function called
// createDeck that will take both as parameters and return a new array
// with all 52 possible card combinations. The returned 'Deck of Cards'
// should be an array with 52 strings in it, each representing a card
// (i.e. 'ace of Hearts')
// Call createDeck and save the result into a variable called
// deckOfCards.
// Write a function called getRandomCard that will return one random 
// card from deckOfCards whenever it is called.