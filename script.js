const container = document.querySelector(".container");
const clears = document.querySelector("#clear");
let number = 256;


function createGridItems(variable) {
    number = variable * variable;
    container.style.gridTemplateColumns = `repeat(${variable}, 1fr`;
    if(number == 0) {
        alert("Please enter a number bigger than 0!");
    }
    else {
        for(let i = 0; number > i; i++) {
            const gridItem = document.createElement("div");
            gridItem.setAttribute('id', `item-${i}`);
            container.append(gridItem);
        }
    }
}

function clear() {
    for(let i = 0; number > i; i++) {
        let gridItem = document.getElementById(`item-${i}`);
        gridItem.style.backgroundColor = "white";
    }
}

function changeGrid() {
    for(let i = 0; number > i; i++) {
        var gridItem = document.getElementById(`item-${i}`);
        gridItem.remove();
    }
    number = parseInt(prompt("Please write a number between 1 and 100."));
    if(number === 0) {
        prompt("Please enter a number bigger than 1!");
        changeGrid();
    } else if(number > 100) {
        prompt("Please enter a number smaller than 100!");
        changeGrid();
    } else {
        createGridItems(number);
    }
}

createGridItems(16);

container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "#669";
    container.style.backgroundColor = "white";
})

clears.addEventListener("click", (e) => {
    clear();
})