// //Function declreations
// // function speak (words){
// //     console.log(words);
// // }

// // speak('hello world');

// //es 5
// //Function Expression
// // let speak = function (words) { //parentheses word is a 'parameter'
// //     console.log(words);//in body of function it is an argument
// // }

// //es6
// //function expression must come before you call it
// // let speak = (words) => {
// //     console.log(words);
// // }

// // speak('hello world'); //calling function

// //functions are defined as methods on objects. To call function as a method:
// let person = {
//     name: 'Obama',
//     speak: function () {
//         console.log('Hello, World!')
//     }
// }
// person.speak();

// /*-------------parameters--------------*/
// //parametes are like variables for functions
// function sayHello (name){ //name is the parameter
//     console.log('Hello, ' + name);
// }

// sayHello('Rich');

// /*--------------return statement------------*/
// function sum (x, y) {
//     return x + y; //returns value out of the function
// } 
// let z = sum(3, 4);

// function double(z) {
//     return z * 2;
// }

// //you can put a function in a function
// //Work from the inside out. 3 and 4 go with sum, sum goes with double.
// let num = double(sum(3, 4));

// //Anything you return after a return statement isn't called

// /*----------Local and Global Scrope-------*/

// let a = "this is the global scope";
// function myFunction() {
//     let b = "this variable is defined in the local scope";
// }
// myFunction();
// console.log(b); //will get an error because local scope and outside function

// //a function in console.log will by default return not defined. It always returns something. 

// // Children have access to the scope of their parents

// let a =1;

// function getScore () { //parent scope
//     let b=2;
//     function add() { //child scope
//         return a + b;
//     }
//     return add();
// }

// getScore();

// /*================ES6 Functions=================*/
// // es5 function
// const sum2 = function (arg1, arg2) {
//     return arg1 + arg2
// }

// // es6 arrow function
// const sum2 = (arg1, arg2) => {
//     return arg1 + arg2
// }

// //with one argument you don't need parenthesis.
// // if it's on one line you don't have to write a return as it is implied in es6
// const sum3 = arg1 => agr1 * 2

// //See a lot in array
// let array = [1, 7, 98, 5, 4, 2]

// // ES5 way
// let doubledArray = array.map(function (num) {
//     return num * 2
// })

// // ES6 way
// let doubledArray = array.map(num => num * 2)

// //some ES6 features aren't available on all browsers

// //DEFAULT Parameters. Let's you set default values so that if a piece of information is missing you can have it. If you had two parameters in es5 in a function and only one input then it would fail. but in ES6 you can set the default 'topping' as cheese, so missing that out wouldn't mean the function wouldn't work
// orderPizza("deep dish") // Cannot read property 'forEach' of undefined

// Parameters are type and toppings, the assigntment is cheese and deep dish
function orderPizza(type = 'deep dish', toppings = ['cheese']) {
    console.log(`Ordering a ${type} pizza with the following toppings:`)
    toppings.forEach(topping => {
        console.log(topping)
    })
}

/*this keyword*/
//value depending on where you run it from
//Avoid using arrow function with THIS keyword

// function hello() {
//     console.log(this)
// }

// hello() // Window (if called by browser) 

//In es5 this will reference the parent object, but in es6 it will reference the global object

// Destructuring
// let [one, two, three] = [1, 2, 3, 4, 5]
// console.log(one)
// console.log(two)
// console.log(three)
// rest: for non-destructured values
let array = [1, 2, 3, 4, 5]
let [one, two, three, ...rest] = array
rest.forEach(number => {
    console.log(number)
})

console.log(rest)