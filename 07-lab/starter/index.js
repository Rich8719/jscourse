const prompt = require("prompt-sync")({
  autocomplete: []
})

// shuffle helper
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}


const suits = ['♥', '♣', '♠', '♦']
const ranks = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K'
]

const cardDict = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

let player = {
  name: 'Player',
  hand: []
}

let computer = {
  name: 'Computer',
  hand: []
}

function createDeck (ranks, suits) {
  var deck = []

  // In order to build a deck, we need 52 cards. Each card consists of a suit, a rank, and a numeric value.
  // We will combine the suit and rank to make a "name" (i.e. "A♥"). Using a dictionary, cardDict, we take the
  // rank and use it to find the corresponding value (an 'A' is worth 14 points).
  //
  // We need to loop through each rank, and for each rank we need to loop through each suit. This way, we can
  // ensure that all 52 cards are created. This is called a nested loop.
  ranks.forEach(function (rank) {
    suits.forEach(function (suit) {
      deck.push({
        name: `${rank}${suit}`,
        value: cardDict[rank] //returns as object. Allows is to get the cards value and compare
      })
    })
  })

  // We need to return the deck in order to be able to store the output of this function. We want to make sure that
  // the deck is shuffled before we return it, so we use shuffle from lodash. https://lodash.com/docs/4.17.5#shuffle
  return shuffle(deck)
}

//call shuffle, divide cards between comp and player
function deal() {
  let deck = createDeck(ranks, suits)
  for(let i = 0; i < deck.length; i++){
    if (i % 2){
      player.hand.push(deck[i]) //.push adds to end of array
    } else {
      computer.hand.push(deck[i])
    }
  }
}

//play a round, compare values
function playRound(player, computer){
  let round = 1
  let shouldExit = false
  while (player.hand.length > 0 && computer.hand.length > 0 && !shouldExit) {
    // roundNumber()
    console.log(`Round #${round}`)
    let playerWarCards = [player.hand.shift()]
    let computerWarCards = [computer.hand.shift()]
    console.log(`Player: ${playerWarCards[0].name} | Computer: ${computerWarCards[0].name}`)
    shouldExit = prompt('Next round? (y/n): ', 'y') !== ('y')

    const playerWarCardValue = playerWarCards[0].value
    const computerWarCardValue = computerWarCards[0].value

    if (playerWarCardValue > computerWarCardValue){
      player.hand.push(...playerWarCards, ...computerWarCards)
      console.log('Player wins!')
    } else if (playerWarCardValue < computerWarCardValue){
      computer.hand.push(...playerWarCards, ...computerWarCards)
      console.log('Computer wins!')
    } else {
      declareWar()
    }
    round++
  } 
  //if else win lose draw
  function declareWar() {
    console.log('WAR')
    // When there is a WAR, each player has to draw three cards and the flip the fourth. We need to make sure that both players have at least 4 cards in their hand. If they don't have 4 cards, they have to flip their last card.
    let playerDrawSize = player.hand.length >= 4 ? 4 : player.hand.length
    let computerDrawSize = computer.hand.length >= 4 ? 4 : player.hand.length
  
    playerNewCards = player.hand.splice(0, playerDrawSize)
    computerNewCards = player.hand.splice(0, computerDrawSize)
  
    //recursive function expanded 
    // let playerDrawSize =
    // if (player.hand.length >= 4){
    //   playerDrawSize = 4
    // } else {
    //   playerDrawSize = player.hand.length
    // }
  
    playerWarCards.unshift(...playerNewCards) // This adds to the War Cards (the piles the player and computer have played.) Unshift is because we need to add them to the top, because we are playing war with these new cards
    computerWarCards.unshift(...computerNewCards) // 
  
    const prize = shuffle([...playerWarCards, ...computerWarCards]) //creates new array of the prize for cleanliness. Shuffle is neccessary to avoid an unusual bug where things can loop indefinitely.
  
    const playerWarValue = playerWarCards[0]
    const computerWarValue = computerWarValue[0]
  
    if (playerWarValue > computerWarValue) {
      player.hand.push(...prize)
      console.log('Player wins!')
    } else if (playerWarValue < computerWarValue) {
      computer.hand.push(...prize)
      console.log('Computer wins!')
    } else {
      declareWar()
    }
  }
}

function playWar() {
  deal()
  playRound(player, computer)
  // console.log(`Player: ${player.hand.length} | Computer: ${computer.hand.length}`)
}

playWar()