// =========================================
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

function generateRandomNumber (max) {
    return Math.ceil(Math.random() * max)
}

function getRandomCard(deck) {
    return deck[generateRandomNumber(deck.length)]
}

const newDeck = createDeck()
const card = getRandomCard(newDeck)

console.log(card)