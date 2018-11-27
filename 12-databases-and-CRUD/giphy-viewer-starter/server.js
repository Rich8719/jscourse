const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const api = require('./api.js')
const db = require('./db')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: 'views/patials'
}))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  db.models.Search.find({
    //could filter stuff here as is it will find everything look at mongoosejs.com for documentation
  })
  .limit(10)
  .sort({date: -1}) //negative 1 is reverse order
  .then(results => { //mongoose returns promise so use then
    res.render('home', {
      searchResults: results
    })
  })
})

app.get('/:search', (req, res) => {
  const searchText = req.params.search
  api.searchGifs(searchText).then()
})

app.post('/', (req, res) => {
  api.searchGifs(req.body.search.then(r => {
    console.log(r)
    const data = JSON.parse(r).data
    console.log(data)

    db.models.Search.create({
      text: req.body.search,
      date: new Date()
    })
    res.render('gif-list', {gifs:data})

    res.redirect(`/${searchText}`) //this reroutes to the app.get(/:search route)
  })) //"search" is the name of the input in the form
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})
