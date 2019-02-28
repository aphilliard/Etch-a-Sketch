var lastMouseOver;

var blockSize = prompt("I will draw a 16x16 grid. How big do you want the blocks to be measured in pixels?");

let root = document.documentElement;
root.style.setProperty('--boxSize', blockSize + "px");

var grid = esketchGrid(16, 16, function(el) {
    el.className='sketched';
    lastMouseOver = el;
});

document.body.appendChild(grid);
     
function esketchGrid(rows, columns, callback) {

    var grid = document.createElement('table');

    grid.className = 'grid';

    for (var r = 0; r < rows; ++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c = 0; c < columns; ++c){
            var cell = tr.appendChild(document.createElement('td'));
            
            cell.addEventListener('mouseover', (function(el, r, c){
                return function(){
                    callback(el, r, c);
                }
            })(cell, r, c), false);
        }
    }
    return grid;
}

function clearGrid() {
    document.location.reload(true)
}