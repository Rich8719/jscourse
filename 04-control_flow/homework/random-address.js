let streets = ['Wedgewood Road', 'Prospect Street', 'Hill Street', 'East Avenue', 'Colonial Drive', 'Homestead Drive', '9th Street', 'Lake Avenue', 'Strawberry Lane', 'Quimby Point'];
let numbers = [2938, 23456, 6630, 33948, 2142, 435, 444, 1111, 1771, 231];
let cities = ['Washington', 'New York', 'Los Angeles', 'Boston', 'Lexington', 'Paris', 'Chicago', 'Bedford', 'London', 'Luton'];
let states = ['DC', 'New York', 'California', 'Massachusetts', 'Kentucky', 'Illinois', 'Texas', 'North Carolina', 'Virginia', 'Florida'];

function generateRandomNumber(max){
    return Math.floor(Math.random() * max);
}

function createAddress(){
   return {
       name: streets[generateRandomNumber(streets.length - 1)],
       number: numbers[generateRandomNumber(numbers.length - 1)],
       city: cities[generateRandomNumber(cities.length - 1)],
       state: states[generateRandomNumber(states.length - 1)] 
   }
}

function printAddress(){
    const address = createAddress();
    console.log(address)
}

printAddress()