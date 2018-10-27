//everything in javascript is an object except for the 6 primitive datatypes
//object is a collection of key value pairs
//build in objects
//built in object has capital letter: Array, Object etc.
// object properties are key value pairs
//two ways to create:

//literal syntax. Everyone uses this
let myHouse = {}; // object

//constructed. No one uses
let myCar = new Object();

// We can also create objects populated with data
let myMotorcycle = {
    wheels: 2,
    color: "blue",
    maxSpeed: 300,
    owners: ["Tedi", "Ena"]
}

//setting properties via the key in dot notation:
let house = myHouse.windows = 6;
console.log(house);
//properties can be set with square brackets
let car = myCar["num-of-wheels"] = 4;
// myCar["doors"] = 2;
console.log(car);

//cannot map through an object. Instead we do:
for (let i in myHouse) {
    // The "hasOwnProperty method returns true if an object property has a certain key"
    if (myHouse.hasOwnProperty(i)) {
        console.log(`${i} = ${myHouse[i]}`); //i will represent key. need bracket notation to access the variable. If used '.' it would try and a property called i
    }
}
//hasOwnProperty method checks to see if an object has a property
//another way 
let keys = Object.keys(myHouse) //returns an array

// //Copying objects
// let yourHouse = myHouse //does not create new object. Just references the same underlying object. You cannot copy an object this way, we are just copying a reference to it.

// function someFunction() { }

// let anotherObject = {
//     c: true
// };

// let anotherArray = [];

// let myObject = {
//     a: 2,
//     b: anotherObject,	// reference, not a copy!
//     c: anotherArray,	// another reference!
//     d: someFunction
// };

// anotherArray.push(anotherObject, myObject);

// //shallow copy just copies over the reference. deep copying copies everything, if we did that on the above we'd be infinitely copying. Generally we don't need to do this. To shallow copy:

// let newOjb = Object.assign({}, myObject) //{} parameter is empty object, and second part is telling it what object we want to copy.

// newObj.a;						// 2
// newObj.b === anotherObject;		// true
// newObj.c === anotherArray;		// true
// newObj.d === anotherFunction;	// true

/*===========real world scenario discussion===============*/
// A user, browsing on a shopping website, searches for size 12 sneakers, and examines several pairs before purchasing one.
//Shopping cart---
//Objects: array, properties: size, brand, shoe, price
//methods: add, remove update
//User---
// Profile, purchase history...
/* car{
    Location:
    In Use:
    License Plate:
 } */
// A user who had reserved a Zipcar arrives to find it has not been returned yet, and customer service transfers her reservation to an available car.

//Object: car
//attributes: Location, in use, mileage, gas, broke down, license plate
//method: Unlock car, verify user, 

//=====================Construtor Functions===================//
//from this object you can create new instance of this function, they won't have the same values but the same keys and methods
//this is a construtor function (an expression).
let Person = function(){ //capitalised( convention showing it's an object.)
}

//we can add properties so that when we pass a name in here it will create a new object with those properties
//the point of the object is to create a blue print we can use over again
let Superhero = function (firstName, superheroName) {
    // Important to understand here that the object properties firstName and superheroName
    // are set through the this keyword with the value passed through the constructor function
    this.firstName = firstName;
    this.superheroName = superheroName;
    console.log('Superhero instantiated');
};

let superman = new Superhero('Clark', 'Superman');
console.log(`${superman.firstName} is ${superman.superheroName}`)
let batman = new Superhero('Bruce', 'Batman');
console.log(`${batman.firstName} is ${batman.superheroName}`)

//you only have to add a method to the object for all of the superheroes to get it 
// don't use arrow functions with constructors

//=================prototypical inheritance:
//Methods are functions grouped together in an object.
//prototype creates a chain. Every instance of superhero will have this identity method attached.
Superhero.prototype.identity = function(){
    console.log(this.firstName + ' is ' + this.superheroName);
}

superman.identity(); //javascript looks at superman for method first, then it looks at the prototype for superman to see where the method is
batman.identity();