/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

function addToList(list, newThing) {
  let newThingLi = document.createElement('li')
  let newThingText = document.createTextNode(newThing)
  newThingLi.appendChild(newThingText)
  list.appendChild(newThingLi)
}

window.onload = function() {

  const button = document.getElementById('new-thing-button')
  const thingList = document.getElementById('fav-list')
  let newThingInput = document.getElementById('new-thing')

  button.addEventListener('click', function(addItem){
    addItem.preventDefault()
    let newThing = newThingInput.value
    addToList(thingList, newThing)

    //clear last input
    newThingInput.value = ''
  })
  // when someone clicks the button...

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
};

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


