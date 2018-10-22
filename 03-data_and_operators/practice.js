//create an array of bands
let bands = ['The Libertines', 'Nirvana', 'The White Stripes', 'The Kings of Leon'];
console.log(bands);

//store element of array in favourit band
let favBand = bands[1];
console.log(favBand);

//get number of elements in the array and store in variable top bands
let topBands = bands.length //  + 1; plus 1 because first number is 0?
console.log(topBands);

//store the last element of the array
//why -1? Wouldn't that be 3?
let lastBand = bands[topBands - 1];
console.log(lastBand);

//create an array of numbers 1, 2, 3, 4, then use a for loop, a forEach loop and a map function to increase each value by one

//-----mapping
let q5 = [1, 2, 3, 4];
let newArray = q5.map(function (num) {
    return num + 1;
})

console.log(newArray);

//Use the array from the previous questions to find the average of the numbers in the array

let sum = 0;
let divide = newArray.length;
for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i] //+= performs the plus then assigns it to the operator (i) which then loops with the new value.
}

const q6 = sum / divide;
console.log(q6);