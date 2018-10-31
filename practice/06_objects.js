/* Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

// 1) Write a function that generates a random integer between 1 and a max number, which will be a parameter

//  let randomNumber = generateRandomNumber()

// 2) Using the function from #1, write another function that generates a given amount of random numbers (as a parameter) and returns the average of all those numbers.
let Monkey = function (name, species, foodsEaten) {
    this.name = name
    this.species = species
    this.foodsEaten = foodsEaten
}

Monkey.prototype.eatSomething = function (foodEaten) {
    this.foodsEaten.push(foodEaten)
}

Monkey.prototype.introduce = function () {
    console.log(`Hello, my name is ${this.name} and I am a ${this.species}. I've eaten ${this.foodsEaten.join(', ')}`)
}

let rich = new Monkey('Rich', 'Gorilla', ['banana', 'apple'])

rich.eatSomething('banana')
rich.introduce()