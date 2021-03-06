const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./api.js')
const db = require('./db.js')
const app = express()

<<<<<<< HEAD
//allows cross domain requests. server on :3000 and client on :4000. not allowed by default/
const corsOptions = {
  origin: 'http://localhost:3000'
=======
const corsOptions = {
  origin: "http://localhost:3000"
>>>>>>> 878722301f89782c4fedc51716bb3debada2966e
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

<<<<<<< HEAD

=======
>>>>>>> 878722301f89782c4fedc51716bb3debada2966e
app.get('/', (req, res) => {
  db.models.Search.find({})
    .limit(10)
    .sort({date: -1})
    .then(results => {
      res.send(results)
    })
})

app.get('/:search', (req, res) => {
  const searchText = req.params.search
  api.searchGifs(searchText).then(r => {
    const data = JSON.parse(r).data
    res.send(data)
  })
})

app.post('/', (req, res) => {
  const searchText = req.body.searchText

  db.models.Search.create({
    text: searchText,
    date: new Date()
  }).then(result => {
    res.send(result)
  })
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})
