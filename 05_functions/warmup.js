// Use conditional logic to determine if the thermostat should heat or cool
// your house. Define your current temperature and your desired temperature, then determine if
// your house should be cooled or heated.

const desiredTemp = 70
let temp = 74
let thermostatStatus = 'cooling'

if (temp < desiredTemp) {
    thermostatStatus = 'warming'
    console.log(thermostatStatus);
} else {
    console.log(thermostatStatus);
}

// Use a for loop to loop through the array and log the contents of each item in the array.

let people = ['Ted', 'Sue', 'Mary']

for (let i = 0; i < people.length; i++){ //i=0 is where index starts. people length is how many are in the array. so as long as i is less than the array you i++, or ad one then you log people[i] to get the result
    console.log(people[i]);
}

// Now, replace the for loop with a forEach method.
people.forEach(function(person){ //part in brackets is called parameter. this function is called a callback function. Callback functions return other functions.
    console.log(person)
})