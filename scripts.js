let allSquares = document.getElementsByClassName('grid-square')
const radioBlack = document.getElementById('black')
const radioRainbow = document.getElementById('rainbow')

const setButton = document.getElementById('side-length-set')
setButton.addEventListener('click', makeGrid)

function makeGrid(){
    clearSquares()
    const gridBody = document.getElementById('grid')
    const sideInput = document.getElementById('side-length-input')
    gridBody.style.gridTemplateColumns = `repeat(${sideInput.value}, 1fr)`;
    for(let i = 0;i < sideInput.value*sideInput.value;i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        if (radioBlack.checked){
            gridSquare.addEventListener('mouseover', (e)  => {
            e.target.style.backgroundColor = 'black';
        })
        } else if (radioRainbow.checked) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            gridSquare.addEventListener('mouseover', (e)  => {
            e.target.style.backgroundColor = '#' + randomColor;
        })
    }
        gridBody.appendChild(gridSquare);
}
}

radioBlack.addEventListener('click', makeGrid)
radioRainbow.addEventListener('click', makeGrid)


function clearSquares (){
    while (allSquares.length > 0){
        for (i = 0;i < allSquares.length; i++){
            allSquares[i].parentNode.removeChild(allSquares[i]);
        }

}
}

const resetButton = document.getElementById('reset-button')
function resetGrid(){
        for (i = 0; i < allSquares.length; i++){
            allSquares[i].style.backgroundColor = 'white'
        }
}
resetButton.addEventListener('click', resetGrid)



