const {sumTwoNumbers} = require ('../src/calc')

//describe just adds description
describe('sumTwoNumbers test', () => {
    test('should return correct type', () => {
        const sum = sumTwoNumbers(1,2)
        const actual = typeof sum
        const expected = 'number'
    
        expect(actual).toBe(expected)
    })

    test('should return correct value', () => {
        const sum = sumTwoNumbers(1,2)
        const actual = sum
        const expected = 3
        expect(actual).toBe(expected)
    })
})

//in terminal npm test. can add flg watch in package.json to run automaticallyy under scrtipts: 
//  "test:watch": "jest --watch" in terminal npx jest ./tests/ --watch 
// or
// npm run test:watch ./tests I think the watch is unneccessary if it's updated in the json
