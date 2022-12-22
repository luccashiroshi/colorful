function doGrid() {
    let columns = Math.trunc(window.innerWidth / 45)
    let lines = Math.trunc(window.innerHeight / 45)

    for (var i = 1; i < lines; i++) {
        doColumns(columns)
    }
}

function doColumns(number) {
    for (var i = 2; i < number; i++) {
        const block = document.createElement("div")
        block.classList.add("block")
        document.getElementById('container').appendChild(block)
        block.onmouseover = (e) => {
            block.style.transition = '70ms'
            let color = getRandomColor()
            block.style.backgroundColor = color
            block.style.boxShadow = `0px 0px 50px 18px ${color}`
        }
        block.onmouseout = (e) => {
            block.style.transition = '3s'
            block.style.backgroundColor = ''
            block.style.boxShadow = ''
        }
    }
}

const getRandomColor = () => {
    const maxVal = 0xFFFFFF
    let randomNumber = Math.random() * maxVal
    randomNumber = Math.floor(randomNumber)
    randomNumber = randomNumber.toString(16)
    let randomColor = randomNumber.padStart(6, 0)
    return `#${randomColor.toUpperCase()}`
}

doGrid()