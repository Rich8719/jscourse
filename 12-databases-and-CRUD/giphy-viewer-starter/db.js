const mongoose = require('mongoose')

const searchSchema = mongoose.Schema({
    text: String,
    date: Date
})

mongoose.model('Search', searchSchema)

mongoose.connect(
    'mongodb://rich8719:87TRJUL6Jn74QpC@ds037622.mlab.com:37622/rj-87'
)

module.exports = db