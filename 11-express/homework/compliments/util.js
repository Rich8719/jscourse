function getRandomColor (colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function getRandomCompliment (compliments) {
    return compliments[Math.floor(Math.random() * compliments.length)]
}

module.exports = {
    getRandomColor, getRandomCompliment
}