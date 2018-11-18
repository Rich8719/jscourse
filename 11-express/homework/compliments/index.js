const express = require('express')
const bodyParser = require('body-parser')
const complimentController = require('./controllers/compliments.js')
const app = express()
const PORT = 4000

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/new-compliment', complimentController.newComplimentView)

app.post('/', complimentController.newCompliment)

app.get('/:name?', complimentController.getCompliment)


app.listen(PORT, () => {
    console.log('App listening on port 4000')
})