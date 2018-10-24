// Declare a function that logs your favorite type of pizza and invoke it

// function myPizza(type){
//     console.log(`My favorite pizza is ${type}`);
// }

const myPizza = type => console.log(`My favorite pizza is ${type}`);

myPizza('pepperoni');

// Declare a function that accepts any array of pizza toppings as a parameter and logs the toppings
// function printToppings(toppings){
//     console.log('This pizza has the following toppings:')
//     toppings.forEach(function(topping){
//         console.log(topping)
//     })
// }

const printToppings = toppings => {
    toppings.forEach(topping => {
        console.log(topping)
    })
}

let arrayToppings = ['pepperoni', 'sausage']
printToppings(arrayToppings);

// Declare a function that accepts any number of values and returns the sum of those values

function sum(numbers){
    let sum = 0

    numbers.forEach(function(number){
        sum += number
    })
    return sum
}
const numbers = [1, 2, 3, 4, 5, 6]
const summed = sum(numbers)
console.log(summed)

// Write all the previous functions using ES6 arrow functions.



// ADVANCED:
// Write a function that adds the first three numbers of an array to the average of the remaining numbers in the array.
// Use destructuring and the rest operator.

