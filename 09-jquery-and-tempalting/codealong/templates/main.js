const MyApp = {
  todos: [
    { toDo: 'Clean fridge' },
    { toDo: 'Take out Puppy' },
    { toDo: 'Finish work' }
  ]
}

MyApp.compileItem = item => {
  let source = $("#to-do-template").html()
  let template = Handlebars.compile(source)
  return template(item)
}

MyApp.populateList = $list => {
  MyApp.todos.forEach(todo => {
    let compiledItem = MyApp.compileItem(todo)
    $list.append(compiledItem)
  })
}

MyApp.addToList = ($list, toDoItem) => {
  let newToDoObject = { toDo: toDoItem }
  MyApp.todos.push(newToDoObject)
  let compiledItem = MyApp.compileItem(newToDoObject)
  $list.append(compiledItem)

  $('#new-thing').val('')
}

$(document).ready(() => {
  let $list = $('#todo-list')
  let $button = $('#new-thing-button')

  MyApp.populateList($list)

  $button.on('click', handleButtonClick)
  $list.on('mouseenter mouseleave', 'li', handleMouse)
  $list.on('click', 'a.complete', handleComplete)
  $list.on('click', 'a.delete', handleDelete)
})

MyApp.deleteItem = $item => {
  let itemIndex = $item.index()
  // console.log(itemIndex)
  if (itemIndex < -1){} /*<<this can't happen*/ else{
    MyApp.todos.splice(itemIndex, 1) //this cuts of the number at the indextItem number, and the second parameter is the number of numers we are cutting out
  }
  $item.remove()
}

// EVENT HANDLERS
function handleButtonClick(event) {
  event.preventDefault()
  let $list = $('#todo-list')
  let value = $('#new-thing').val()
  MyApp.addToList($list, value)
}

function handleMouse(event) {
  if (event.type === 'mouseenter'){
    $(this).removeClass('inactive')
    $(this).addClass('active')
  } else if(event.type === 'mouseleave') {
    $(this).removeClass('active')
  }
}

function handleComplete(event) {
  event.preventDefault()
  $item = $(this).parent()
  $item.toggleClass('completed')
}

//cant't just use $item.remove() because it won't remove it from the array. Have to update the 'applicatin state' so we have to find out which item is clicked on via an array function
function handleDelete(event) {
  event.preventDefault()
  let $item = $(this).parent('li')
  MyApp.deleteItem($item)
}