
let gridBody = document.getElementById('grid')


function makeSquares(thisMany){
    for (let i = 0; i <= thisMany; i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square')
        gridBody.appendChild(gridSquare)
    }
}

makeSquares()
