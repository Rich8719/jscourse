const compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
]
const colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]

//can I call multiple controllers at once so that I don't have to dupluicate stuff in them?
const ComplimentController = {
    getCompliment: (req, res) => {
        const color = colors[Math.floor(Math.random() * colors.length)]
        const compliment = compliments[Math.floor(Math.random() * compliments.length)]
        console.log(compliments)
        const name = req.params.name
        res.render('index', {compliment, color, name})
    },
    newComplimentView: (req,res) => {
        const color = colors[Math.floor(Math.random() * colors.length)]
        res.render('new-compliment', { color })
    },
    newCompliment: (req, res) => {
        const new_compliment = req.body.new_compliment
        const color = colors[Math.floor(Math.random() * colors.length)]
        const name = req.params.name
        const compliment = compliments[Math.floor(Math.random() * compliments.length)]
        compliments.push(new_compliment)
        res.render('index', {compliment, color, name})
    }
}

module.exports = ComplimentController