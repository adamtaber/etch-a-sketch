let gridNumber;
const modal = document.getElementById('modal');
let gridContainer = document.getElementById('gridContainer');
let gridBlocks = document.querySelectorAll('div#gridContainer > div');
let gridArray;
let mouseDown = false;
gridContainer.onmousedown = () => (mouseDown = true);
gridContainer.onmouseup = () => (mouseDown = false);

function generateModal() {
    modal.style.display = "block";
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function drawing(e){
        if(e.type === 'mouseover' && !mouseDown) return;
        e.target.style.backgroundColor = 'black';
    }

function inputText() {
    gridNumber = Number(document.getElementById('numberInput').value);

    if(gridNumber < 101) {
        modal.style.display = "none";
        gridArray = [];

        for (let i = 0; i < (gridNumber*gridNumber); i++) {
            gridArray[i] = document.createElement('div');
            gridArray[i].id = 'block' + i;
            gridArray[i].className = 'gridBlocks';
            gridArray[i].addEventListener('mouseover', drawing);
            gridArray[i].addEventListener('mousedown', drawing);
            document.getElementById("gridContainer").appendChild(gridArray[i]);
            gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
            gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        }
        console.log(gridArray);

    }else if(gridNumber > 100) {
        document.getElementById('text').innerText = 
        "Please enter a number from 1 to 100";
    }
}

document.getElementById('btn').addEventListener('click', generateModal);
document.getElementById('submit').addEventListener('click', inputText);

/*function drawing(){
    gridContainer.addEventListener('mousedown', event => {
        if(event.type === 'mouseover' && !mouseDown) return;
        event.target.style.backgroundColor = 'black';
        blackSquares();
    })
}*/

/*function blackSquares() {
    gridBlocks = document.querySelectorAll('div#gridContainer > div');
    gridBlocks.forEach(el => el.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'black';
    })) 
}*/