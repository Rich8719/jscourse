//DOM is representation of html as an object
//DOM has it's own API
//Methods to take note of:
// document.getElementById(String id)
// document.querySelector(String selector)
// document.querySelectorAll(String selector)
//more here: https://developer.mozilla.org/en-US/docs/Web/API/Document

//=======================Targeting

// window.onload = function () {

//     // create a couple of elements in an empty HTML page
//     let heading = document.createElement("h1");
//     console.log(heading)
//     let headingText = document.createTextNode("Hello dynamic world!");
//     heading.appendChild(headingText);
//     document.body.appendChild(heading);
// }

// // run this function when the document is loaded
// window.onload = function () {
//     // Target items by id via the getElementById() method
//     //You should query the dom once and save element to variable
//     let helloElem = document.getElementById("hello");
//     // We can access that element's css styles through the style property
//     // and then accessing the css property through its camel-cased equivalent
//     helloElem.style.color = "red";

//     let campusesContainer = document.getElementById("gaCampuses");
//     // The getElementsByTagName() method returns a live HTMLCollection of elements
//     // with the given tag name.
//     let gaCampuses = campusesContainer.getElementsByTagName("li");

//     // or, we can get elements by their class name
//     gaCampuses = campusesContainer.getElementsByClassName('list-item')
//     console.log(gaCampuses) //to see this is a collection not an array
//     // Not that gaCampuses is an HTMLCollection, and not an array. Becuase it's not an
//     // Array, we cannot use forEach. We can either use a for loop:
//     for (var i = 0; i < gaCampuses.length; i++) {
//         gaCampuses[i].style.backgroundColor = "purple";
//     }

//     // Or, we can conver it to an array. Using ES6 spread syntax:
//     gaCampuses = [...gaCampuses]
//     gaCampuses.forEach(campus => {
//         campus.style.backgroundColor = "blue"
//     })
// }

//=========================Elements
// Globabl Application state
// MyApp = {};

// // Gets text input value and logs it
// MyApp.getInput = function () {
//     let input = document.getElementById('my-input')
//     console.log(input.value)
// }

// window.onload = function () {
//     let button = document.getElementById('my-input-button');
//     // Event parameter is the default object event that would have happened on user click
//     button.addEventListener('click', function (event) {
//         // The preventDefault() method lets us disable the default action
//         // allowing us to override with our on functionality.
//         event.preventDefault()

//         console.log(event)

//         MyApp.getInput()
//     })
// };
// --------------------------------------------------------
// window.onload = function () {
//     // conver it to an array
//     let buttons = [...document.getElementsByClassName('button')]

//     // We can loop throguh each element and add event listeners on each one.
//     // We can't add an event listener on a collection or array of elements
//     // buttons.forEach(button => {
//     //     button.addEventListener("click", event => {
//     //         console.log(event.target)
//     //     })
//     // })

//     // or, we can use the buttons' parent element. Notice that the 'target'
//     // represents the element that was clicked, and the 'currentTarget' represents
//     // the element that has the EventListener on it. 
//     let parent = document.getElementById('parent')
//     parent.addEventListener('click', event => {
//         console.log(event.target)
//         console.log(event.currentTarget)
//     })
// };

// =========================jquery====================//
// in jQuery, we wait for the document to be ready before querying.
$(document).ready(function () {
    // It is good practice to prefix items we have selected via jQuery
    // with a $ in front of the variable name
    let $parent = $("#parent") // use '#' for ids
    let $buttons = $(".button") // use '.' from classes

    console.log($parent)
    console.log($buttons)

    $parent.css('backgroundColor', 'purple')
    $parent.css('padding', '2rem')

    // create a new div element in memory
    let $newDiv = $("<div></div>")
    let newDivHTML = "<h1>This Is The New Div</h1>"

    // set the inner HTML for the div
    $newDiv.html(newDivHTML)

    // append it to our parent
    $parent.append($newDiv)

    // we can add a class to our new div like so:
    $newDiv.addClass('new-div')
    
    $buttons.on('click', function (event) {
        event.preventDefault();
        console.log(event.target)
    });
})