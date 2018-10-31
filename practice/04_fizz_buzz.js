
// Relying on your newfound knowledge of loops, combine loops and if/else statements together and incrementally build the common fizzbuzz loop.

// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.


for (let i = 1; i <= 100; i++) {
    if (i % 3 && i % 5 == 0) {
        console.log('fizzbuzz')
    } else if (i % 5 == 0) {
        console.log('buzz')
    } else if (i % 3 == 0) {
        console.log('fizz')
    } else {
        console.log(i)
    }
}