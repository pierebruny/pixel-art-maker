// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const sizePicker = document.querySelector('#sizePicker');
const pxlCanvas = document.querySelector('#pixelCanvas');
const rowip = document.querySelector('#inputHeight');
const columnip = document.querySelector('#inputWidth')

/*
    MakeGrid method is called when user Submits height and width
    to create a new pixel canvas to work with.
*/
function makeGrid() {
    //CLears the canvas everytime user submits new height and width of canvas.
    while(pxlCanvas.hasChildNodes()){
        pxlCanvas.removeChild(pxlCanvas.firstChild);
    }
    
    let rows = rowip.value;
    let columns = columnip.value;
    
    //creates the canvas for given height and width
    //and sets the selected color to fill the pixels in canvas when clicked on 
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

//evenlistener to call the makegrid method when user submits new canvas height and width
sizePicker.addEventListener('submit', function(event){
    event.preventDefault();
    makeGrid();
});
