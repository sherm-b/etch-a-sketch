
const gridBody = document.getElementById('grid')
const resetButton = document.getElementById('reset-button')
const sideInput = document.getElementById('side-length-input')
const setButton = document.getElementById('side-length-set')
let allSquares = document.getElementsByClassName('grid-square')
setButton.addEventListener('click', makeGrid)

function makeGrid(){
    clearSquares()
    gridBody.style.gridTemplateColumns = `repeat(${sideInput.value}, 1fr)`;
    for(let i = 0;i < sideInput.value*sideInput.value;i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridBody.appendChild(gridSquare);
        
    }
}

function clearSquares (){
    while (allSquares.length > 0){
        for (i = 0;i < allSquares.length; i++){
            allSquares[i].parentNode.removeChild(allSquares[i])
        }

}
}

allSquares.forEach(square => {
    square.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
    })
})



resetButton.addEventListener('click', () => {
    allSquares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
})