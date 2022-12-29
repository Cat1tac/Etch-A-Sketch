const sketch = document.querySelector('#container');
const slider = document.querySelector('#myRange');
const sliderOutput = document.querySelector('#sliderValue');
sliderOutput.innerHTML = slider.value;
let size = slider.value;
const colorChange = document.querySelector('#colorChange');
const bgChange = document.querySelector('#bgChange');
const gridLines = document.querySelector('#gridLines');

boxes();

function boxes() {
    for (let i = 0; i < 100; i++){
        var box = document.createElement('div');
        box.classList.add('block');
        box.classList.add('lines');

        sketch.appendChild(box);
    }
    //Lets user draw over blocks
    const hover = document.querySelectorAll('.block');
    hover.forEach((div) => {
        div.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = colorChange.value;
        });
    }); 
    //Changes size of the grid
    slider.addEventListener("change", () => {
        sliderOutput.innerHTML = slider.value;
        newGrid();
    });
    //changes background color
    bgChange.addEventListener("change", () => {
        sketch.style.backgroundColor = bgChange.value;
    });
    //Toggles grid lines
    gridLines.addEventListener("click", () => {
        size = slider.value;
        const vanish = document.querySelectorAll('.block');
        console.log(vanish);
        vanish.forEach(div => {
            div.classList.toggle('lines');
        });

        if (box.classList.contains('lines')){
            vanish.forEach(div => {
                div.style.width = ((640 / size) - 2) + "px";
                div.style.height = ((640 / size) - 2) + "px";
            });

        } else {
            vanish.forEach(div => {
                div.style.width = (640 / size) + "px";
                div.style.height = (640 / size) + "px";
            });
        }
    });
}

function newGrid() {
    size = slider.value;
    const square = size * size;
    const vanish = document.querySelectorAll('.block');
    //Removes all blocks
    vanish.forEach(block => {
        block.remove();
    });
    
    //Replaces all blocks with new ones
    for (let i = 0; i < square; i++){
        var box = document.createElement('div');
        box.classList.add('block');
        box.classList.add('lines');
        box.style.width = ((640 / size) - 2) + "px";
        box.style.height = ((640 / size) - 2) + "px";

        sketch.appendChild(box);
    }
    
    const hover = document.querySelectorAll('.block');
    hover.forEach((div) => {
        div.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = colorChange.value;
        });
    });

    //Toggles grid lines
    gridLines.addEventListener("click", () => {
        size = slider.value;
        const vanish = document.querySelectorAll('.block');
        console.log(vanish);

        if (box.classList.contains('lines')){
            vanish.forEach(div => {
                div.style.width = ((640 / size) - 2) + "px";
                div.style.height = ((640 / size) - 2) + "px";
            });

        } else {
            vanish.forEach(div => {
                div.style.width = (640 / size) + "px";
                div.style.height = (640 / size) + "px";
            });
        }
    });
}