const express = require('express')
const app = express();

const PORT = 4000

app.get('/:numberBottlesOfBeer?', (req,res) => {
    let numBottles = parseInt(req.params.numberBottlesOfBeer)
    
    if (!numBottles){
        numBottles = 99
    }

    const numBottlesMinusOne = numBottles - 1
    const lyrics = `${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer.<br>Take one down and pass it around, ${numBottlesMinusOne} of beer on the wall.<br>`
    
    const link = `<a href="/${numBottlesMinusOne}">Next line</a>` 
    res.send(lyrics + link);
});

app.listen(PORT, () => {
    console.log('App listening on port 4000')
});