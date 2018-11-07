let lyrics = [
    `of beer on the wall,`,
    `of beer. Take one down and pass it around, `,
    `of beer on the wall.`
]

//adds lyrics to list
function addLyricToList(lyric) {
    let list = document.getElementById('lyrics-list')
    let listItem = document.createElement('li')
    listItem.appendChild(lyric)
    list.appendChild(listItem)
}

function generateLyric(i) {
    let plural = 'bottles'
    let singular = plural.replace('s', '')
    let placeholder = ''
    lyrics.forEach(function (lyric, index) {
        if (i > 0 && index == 2) {
            i = i - 1
        }
        if (i > 1 || i == 0 && i !== 99) {
            placeholder += `${i} ${plural} ${lyric} `
        } else if (i !== 99) {
            placeholder += `${i} ${singular} ${lyric} `
        }
    })

    lyric = document.createTextNode(placeholder)
    addLyricToList(lyric)
}

function generateLyrics() {
    for (let i = 99; i >= 0; i--) {
        generateLyric(i)
    }
}

window.onload = function () {
    generateLyrics()
}