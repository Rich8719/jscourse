// convert these impure functions to pure functions

// 1. Impure
const minAge = 21
const checkAge = age => {
  return age >= minAge
}

//Pure
const checkAge = age => {
  const minAge = 21
  return age >= minAge
}

// 2.

//Impure
const addItemToCart = (cart, item) => {
  cart.push(item)
  return cart
}

//Pure
const addItemToCart = (cart, item) => {
  const newCart = [...cart]
  newCart.push(item)
  return newCart
}

// 3: this one is tricky! 
const saveUser = attributes => {
  const user = Db.save(attributes)
}

const welcomeUser = user => {
  Email(user)
}

const signUp = attributes => {
  const user = saveUser(attributes)
  welcomeUser(user)
}

//Pure
const saveUser = (Db, attributes) => {
  const user = Db.save(attributes)
}

const welcomeUser = (Email, user) => {
  Email(user)
}
