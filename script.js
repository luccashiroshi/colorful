function doGrid() {
    let columns = Math.trunc(window.innerWidth / 45)
    let lines = Math.trunc(window.innerHeight / 45)

    for(var i = 1; i < lines; i++) {
        doColumns(columns)
    }
}

function doColumns(number) {
    for (var i = 2; i < number; i++) {
        const block = document.createElement("div")
        block.classList.add("block")
        document.getElementById('container').appendChild(block)
    }
}

doGrid()
