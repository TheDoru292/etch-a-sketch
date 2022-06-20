function createGrid(sum) {
    let numberOfDivs = sum * sum;
    gridNumber = numberOfDivs;

    for(let i = 0; numberOfDivs > i; i++) {
        const div = document.createElement(`div`);
        div.dataset.divId = `${i}`;
        divContainer.append(div);
        addEvent(div);
    }
    divContainer.style.gridTemplateColumns = `repeat(${sum}, 1fr)`;
}

function addEvent(tag) {
    const colorPick = document.querySelector("#color");
    let color = colorPick.value;

    colorPick.addEventListener("change", (e) => {
        return color = e.target.value;
    });

    tag.addEventListener('mouseover', () => {
        tag.classList.add('hovered');
        tag.style.backgroundColor = color;
    })
}

function clearGrid() {
    for(let i = 0; gridNumber > i; i++) {
        const div = document.querySelector(`div[data-div-id="${i}"]`);
        div.classList.remove('hovered');
    }
}

function changeGrid() {
    let number = prompt("Set the grid row x column number :) MAX NUMBER 100");

    if(number > 100) number = prompt("Please set a number less than or equal 100");
    if(number < 0) number = prompt("Please choose a number higher than 0!");

    for(let i = 0; gridNumber > i; i++) {
        const div = document.querySelector(`div[data-div-id="${i}"]`);
        div.remove();
    }

    createGrid(number);
}

function colorPick() {

}

const divContainer = document.querySelector(".container");
const colorClass = document.querySelector(".hovered");
const resetGrid = document.querySelector(".reset");
const changeGridBtn = document.querySelector(".grid");

let gridNumber = 0;

resetGrid.addEventListener("click", clearGrid);

changeGridBtn.addEventListener("click", changeGrid);

createGrid(16);