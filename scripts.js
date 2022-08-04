
let gridBody = document.getElementById('grid')

function makeGrid(thisMany){
    gridBody.style.gridTemplateColumns = `repeat(${thisMany}, 1fr)`;
    for(let i = 0;i < thisMany*thisMany;i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridBody.appendChild(gridSquare);
    }
}

makeGrid(40)


let allSquares = document.querySelectorAll('.grid-square')

allSquares.forEach(square => {
    square.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
    })
})

const resetButton = document.getElementById('reset-button')

resetButton.addEventListener('click', () => {
    allSquares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
})
