"use strict";

const gridContainer = document.getElementById("grid-container");
const btnReset = document.getElementById("btn-reset");
const btnColor = document.getElementById("btn-color");

let currentColor = btnColor.value;
let changeColor = false;
let gridColor = btnColor.value;

console.log(gridColor);
function setUpGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`;

  for (let i = 0; i < size ** 2; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
  }
}

function colorOnMouseDown(e) {
  changeColor = true;
  if (!(e.target === e.target.closest(".grid-item"))) return;
  e.target.classList.add("grid-item-colored");
}
function colorOnMouseOver(e) {
  if (!(e.target === e.target.closest(".grid-item"))) return;
  if (!changeColor) return;
  e.target.classList.add("grid-item-colored");
}

//change color on mouse down
function addColorToGrid() {
  //change color when mouse is down
  document.addEventListener("mousedown", colorOnMouseDown);

  gridContainer.addEventListener("mouseover", colorOnMouseOver);
  //when mouse is up cannot change color
  document.addEventListener("mouseup", () => {
    changeColor = false;
  });
}

function clearGrid() {
  const allGridItems = document.querySelectorAll(".grid-item");
  allGridItems.forEach((el) => el.classList.remove("grid-item-colored"));
}

//only function to be run outside a function
function run() {
  setUpGrid(100);
  addColorToGrid();
  btnReset.addEventListener("click", clearGrid);
}
run();
