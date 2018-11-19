const view = 'index'
const defaultNum = '99'
const defaultNext = defaultNum -1

const BottlesController = {
    getBottles: (req, res) => {
        let bottles = req.params.numberOfBottles || defaultNum;
        let next = bottles - 1;
        res.render(view, { bottles, next });
    },
    welcomePlayer: (req, res) => {
        res.render(view, {
            player_name: req.body.player_name,
            bottles: defaultNum,
            next: defaultNext
        })
    }
}

module.exports = BottlesController