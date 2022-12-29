const sketch = document.querySelector('#container');
boxes();

function boxes() {
    for (let i = 0; i < 100; i++){
        var box = document.createElement('div');
        box.classList.add('block');

        sketch.appendChild(box);
    }
    const hover = document.querySelectorAll('.block');
    hover.forEach((div) => {
        div.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'red';
        });
    }); 

    const grid = document.querySelector('button');
    grid.addEventListener("click", () => {
        newGrid();
    });

}

function newGrid() {
    const size = prompt("Enter size of one side of the grid");
    const square = size * size;
    const vanish = document.querySelectorAll('.block');
    vanish.forEach(block => {
        block.remove();
    })
    
    for (let i = 0; i < square; i++){
        var box = document.createElement('div');
        box.classList.add('block');
        box.style.width = ((640 / size) - 2) + "px";
        box.style.height = ((640 / size) - 2) + "px";
        sketch.appendChild(box);
    }
    
    const hover = document.querySelectorAll('.block');
    hover.forEach((div) => {
        div.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'red';
        });
    });
}