/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

// let random1 = Math.floor(Math.random()* 6 + 1);//plus 1 is because random does not generate 1, but numbers between 0 and .999*
// let random2 = Math.floor(Math.random() * 6 + 1);

//we're doing it twice can write function
function generateRandomNumber(max){
    return Math.ceil(Math.random() * max) //math ceil rounds up
}

function updateDice(){
    let rand1 = generateRandomNumber(6)
    let rand2 = generateRandomNumber(6)

    die1.classList = `dice dice-${rand1}`
    //first class is already there and we don't want to overwrite it
    die2.classList = `dice dice-${rand2}`
}

// CREATE 6 DIE IN THE HTML AND TRY AND RETURN AN ARRAY FROM THE DOM TO ITTERATE OVER

const button = document.getElementById('roll-dice')//document object availble because we are accessing it in the browser. Wouldn't be available in node. getElementById is a method, takes one argurment "roll dice"
const die1 = document.getElementById('first-die')
const die2 = document.getElementById('second-die')

button.addEventListener('click', updateDice) //method .addEventListener takes two arguments, one of which is a javascript event type in this case string
die2.addEventListener('click', updateDice)
die1.addEventListener('click', updateDice)