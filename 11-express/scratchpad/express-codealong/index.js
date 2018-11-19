const express = require('express')
const app = express()
const PORT = 4000
//need to specify route handler
app.get('/', (req, res) => {
    res.send('hello')
})

//leveraging parameters
app.get('/:name', (req, res) => {
    const greeting = (`<h1>Hello ${req.params.name}</h1>`)
    const link = (`<a href="/Spiderman">Say hello Spiderman</a>`)
    res.send(greeting + link)
})

//last line of code should be app.listen
app.listen(PORT, () => {
    console.log('app listening on port 4000')
})