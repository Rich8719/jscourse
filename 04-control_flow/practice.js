/*------------If else statements---------------*/
//ternary operators
// let userAge = 16;
// let drinkingAge = 21;

// let allowed = (userAge > drinkingAge) ? "yes" : "no";
// console.log(allowed);

/*-------------block scope------------------*/
//there is no block scope in javascript with "var." let and const use scope. Only functions introduce scope.
var name = 'gerry';
{
   var name = "jay";
}
console.log(name);
// according to notes this should be => jay but i got gerry?

// /*-----------------Truthy and falsey---------------*/

// /*----------------Short circuit logic---------------*/
// // Runs the second operand dependent on the first for example?
// /*
// let name = person.name || "bobby default";
// console.log(name);*/

/*-----------------Iteration----------------*/
let a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++){
    console.log(i);
}
//You can iterate over an array as above, but this is inefficient, as it is a fixed length (nothing is being added or removed), because it is the length property once every single loop. It is better to chain it with a let assignment

let b = [1, 2, 3, 4, 5];

for (let i = 0, len = b.length; i < len; i++ ) {
    console.log(i);
}
// the comma lets you define another variable for length. You do this once, then check the i against the number in the variable, making it more efficient.

// /*----------------While and Do-While----------------*/
let countdownTimer = 10;

while (countdownTimer > 10) {
    console.log(countdownTimer)
    countdownTimer-- 
} //I didn't get an output, should I have? I think this is the example of it not neccessairily running.

let counter = 0;
do {
    console.log(counter++);
    } while (counter < 10);