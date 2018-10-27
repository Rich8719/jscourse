/*

Card Game of War Exercise Part 1.

*/

let suits = ['hearts', 'clubs', 'spades', 'diamonds']
let ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

function createDeck() {
    let deckOfCards = []
    ranks.forEach(function (rank) {
        suits.forEach(function (suit) {
            const card = `${rank} of ${suit}`
            deckOfCards.push(card)
        })
    })

    return deckOfCards
}

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max - 1)
}

function getRandomCard(deck) {
    return deck[generateRandomNumber(deck.length)]
}

const newDeck = createDeck();
const card = getRandomCard(newDeck);

// console.log(newDeck)
console.log(card)

// Given the above suits and ranks array, write a function called
// createDeck that will take both as parameters and return a new array
// with all 52 possible card combinations. The returned 'Deck of Cards'
// should be an array with 52 strings in it, each representing a card
// (i.e. 'ace of Hearts')
// Call createDeck and save the result into a variable called
// deckOfCards.
// Write a function called getRandomCard that will return one random 
// card from deckOfCards whenever it is called.