
let gridBody = document.getElementById('grid')

function makeGrid(thisMany){
    gridBody.style.gridTemplateColumns = `repeat(${thisMany}, 1fr)`;
    for(let i = 0;i < thisMany*thisMany;i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridBody.appendChild(gridSquare);
    }
}

makeGrid(16)

document.querySelectorAll('.grid-square').forEach(item => {
    item.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
    })
})