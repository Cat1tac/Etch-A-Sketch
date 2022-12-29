const sketch = document.querySelector('#container');
boxes();

function boxes() {
    for (let i = 0; i < 256; i++){
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
    sketch.style.width = (size * 2 * 22) + "px";
    console.log(sketch.style.width);
    const vanish = document.querySelectorAll('.block');
    vanish.forEach(block => {
        block.remove();
    })
    
    for (let i = 0; i < square; i++){
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
}