const express = require("express");
const bodyParser = require('body-parser')
const bottlesController = require('./controllers/bottles.js')
const app = express()
const PORT = 4000

app.set('view engine', 'hbs')

//.use isfor middleware. stuff that requests go through. a bridge between serve and client
app.use(express.static('public'))
// app.use(bodyParser.json()) //not used in this app but for json
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.render('welcome')
})

app.post('/', bottlesController.welcomePlayer)

app.get("/:numberOfBottles?", bottlesController.getBottles)

app.listen(PORT, () => {
  console.log("app listening on port 4000");
}); 