let evens = []
evens.push(2,4,6,8,10)

let odds = []
odds.push(1,3,5,7,9)

console.log(evens)
//every returns true or false. Every item has to be true
let allEvens = odds.every(function (num) { //(num) is a representation of every number in the array. In this case the array evens. Everytime it runs it runs the next number.
    console.log(num)
    return num % 2 === 0 //return true if this is true (even) for everyone of those numbers
})

console.log(allEvens)

//if seet to odds, it would only run once when it discovers that one is false it stops. foreach would run through everyone before producing the result.

//Array.some tests whether any element passes the test
let divisibleByFour = evens.some(function (num) {
    return num % 4 === 0
})

console.log(divisibleByFour)

//Array.filter() only returns items that pass the test
let bigNums = evens.filter(function (num) {
    return num > 5
})

console.log(bigNums)
// [6, 8, 10]

let smallNums = odds.filter(function (num) {
    return num < 5
})

console.log(smallNums)
// [ 1, 3]

//Array.map The .map() method creates a new array with the results of calling a provided function on every element in this array. Leaves the original untouched

let timesFive = evens.map(function (num) {
    return num * 5
})

console.log(timesFive)
// [10, 20, 30, 40, 50]

let timesTen = odds.map(function (num) {
    return num * 10
})
console.log(timesTen)
// [10, 30, 50, 70, 90]

console.log(odds)
// [ 1, 3, 5, 7, 9 ]