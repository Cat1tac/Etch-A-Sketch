const sketch = document.querySelector('#container');
const slider = document.querySelector('#myRange');
const sliderOutput = document.querySelector('#sliderValue');
sliderOutput.innerHTML = slider.value;

boxes();

function boxes() {
    for (let i = 0; i < 100; i++){
        var box = document.createElement('div');
        box.classList.add('block');

        sketch.appendChild(box);
    }
    //Lets user draw over blocks
    const hover = document.querySelectorAll('.block');
    hover.forEach((div) => {
        div.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'red';
        });
    }); 

    slider.addEventListener("change", () => {
        sliderOutput.innerHTML = slider.value;
        newGrid();
    });

}

function newGrid() {
    const size = slider.value;
    const square = size * size;
    const vanish = document.querySelectorAll('.block');
    //Removes all blocks
    vanish.forEach(block => {
        block.remove();
    })
    
    //Replaces all blocks with new ones
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