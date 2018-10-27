
// 1) Write a function that generates a random integer between 1 and a max number, which will be a parameter

function generateRandomNumber(max){
    return Math.ceil(Math.random() * max)
}
//  let randomNumber = generateRandomNumber()

// 2) Using the function from #1, write another function that generates a given amount of random numbers (as a parameter) and returns the average of all those numbers.

function averageRandomNumber(count){
    let nums = []
    for(let i = 0; i < count; i++){
        nums.push(generateRandomNumber(100))
    }

    let total = nums.reduce(function (sum, num) {
        return sum += num
    })
    
    return total/count
}

const average = averageRandomNumber(32)
console.log(average)