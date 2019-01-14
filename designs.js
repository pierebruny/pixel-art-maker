// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const sizePicker = document.querySelector('#sizePicker');
const pxlCanvas = document.querySelector('#pixelCanvas');

function makeGrid() {
    while(pxlCanvas.hasChildNodes()){
        pxlCanvas.removeChild(pxlCanvas.firstChild);
    }
    
    let rows = document.querySelector('#inputHeight').value;
    let columns = document.querySelector('#inputWidth').value;
    
    for(let row = 0; row < rows; row++){
        let rowTag = document.createElement('tr');
        pxlCanvas.appendChild(rowTag);
        for(let column = 0; column < columns; column++){
            let colTag = document.createElement('td');
            rowTag.appendChild(colTag);
            colTag.addEventListener('mousedown', function(e){
                let color = document.querySelector('#colorPicker').value;
                this.style.backgroundColor = color;
            });
        }
    }
}

sizePicker.addEventListener('submit', function(event){
    event.preventDefault();
    makeGrid();
});
