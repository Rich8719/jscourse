// this ia new change

/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

let images = ['image1.png', 'image2.png', 'image3.png']

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

let image = images[01]

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

let arrayLength = images.length

/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */

let lastElement = images[images.length - 1]

// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

let numbers = [1, 2, 3, 4]

for (let i = 0; i < numbers.length; i++) {
   numbers[i] ++
}

console.log(numbers)

let numbers2 = [1, 2, 3, 4]
numbers2.forEach(function (element, i) {
    numbers2[i] ++
})

console.log(numbers2)

let numbers3 = [1, 2, 3, 4].map(function (element) {
    return element + 1
})

console.log(numbers3)

/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */

let numbers4 = [2, 3, 4, 5]
// let average = []
// numbers4.forEach(function(element, index) {
//     average += element   
// })

let average = 0
numbers4.forEach(function (element, index) {
    average += element
})

average = average / numbers4.length

// average = average / numbers4.length

console.log(average)