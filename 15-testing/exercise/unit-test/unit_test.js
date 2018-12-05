const {sumTwoNumbers} = require("./src/calc.js")

// assert that sumTwoNumbers returns an integer

// one for one matching. Calc.js so calctest.js
//each time you create a test you should deliberately make it fail to make sure it does. change expected, number to string for example

//test written out in functions, not calling test and assert function. Lot of duplication
function testOne(){
    const sum = sumTwoNumbers(1, 2)
    const actual = typeof sum
    const expected = 'number'
    const assertion = actual === expected
    const errorMessage = 'YOUR TEST SHALL NOT PASS!'
    
    if (assertion){
        console.log('sumTwoNumbers should return a number')
    }
    
    console.assert(assertion, errorMessage) 
}

function testTwo() {
    const sum = sumTwoNumbers(2,3)
    const actual = sum
    const expected = 5
    const assertion = actual === expected
    const errorMessage = 'YOUR TEST SHALL NOT PASS!'

    if (assertion){
        console.log('sumTwoNumbers should return the correct value')
    }

    console.assert(assertion, errorMessage)
}

//assert and test functions to simplify tests
const assert = (actual, expected, message) => {
    const assertion = actual === expected
    if (assertion) {
        console.log('Passed:', message, '\n')
        return
    }

    console.assert(assertion, 'actual did not match expected')
    console.log('actual', actual)
    console.log('expected', expected)
    console.log('\n')
}

const test = (description, callback) => {
    console.log('Test: ', description, '\n')
    return callback(assert)
}

test('showTwoNumbers return type', assert => {
    const sum = sumTwoNumbers(1, 2)
    const actual = typeof sum
    const expected = 'number'

    assert(actual, expected, 'sumTwoNumbers should return a number')
})

test('sumTwoNumbers return value', assert => {
    const sum = sumTwoNumbers(2, 3)
    const actual = sum
    const expected = 5

    assert(actual, expected, 'sumTwoNumbers should return the correct value')
})