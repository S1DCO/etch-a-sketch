"use strict";

const gridContainer = document.getElementById("grid-container");
const btnReset = document.getElementById("btn-reset");
const btnColor = document.getElementById("btn-color");
const gridSize = document.getElementById("grid--size");
const gridSizeLabel = document.querySelector(".label-grid--size");
const btnRainbow = document.querySelector(".btn-rainbow");
const btnEraser = document.querySelector(".btn-eraser");

let changeColor = false;

function currentColor() {
  if (btnRainbow.classList.contains("btn-rainbow-active")) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  }
  if (btnEraser.classList.contains("btn-eraser-active")) {
    return "white";
  }
  return btnColor.value;
}

function setUpGrid() {
  gridContainer.innerHTML = "";
  let size = gridSize.value;
  gridSizeLabel.textContent = `Grid Size: ${size}x${size}`;
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
  e.target.style.backgroundColor = currentColor();
}
function colorOnMouseOver(e) {
  if (!(e.target === e.target.closest(".grid-item"))) return;
  if (!changeColor) return;
  e.target.style.backgroundColor = currentColor();
}

//change color on mouse down
function addColorToGrid() {
  //change color when mouse is down
  gridContainer.addEventListener("mousedown", colorOnMouseDown);

  gridContainer.addEventListener("mouseover", colorOnMouseOver);
  //when mouse is up cannot change color
  gridContainer.addEventListener("mouseup", () => {
    changeColor = false;
  });
  document.addEventListener("mouseover", (e) => {
    if (e.target === e.target.closest(".grid-item")) return;
    changeColor = false;
  });
}

// --------button--------
function clearGrid() {
  const allGridItems = document.querySelectorAll(".grid-item");
  allGridItems.forEach((el) => (el.style.backgroundColor = "white"));
  btnEraser.classList.remove("btn-eraser-active");
  btnRainbow.classList.remove("btn-rainbow-active");
  btnColor.value = "black";
  gridSize.value = 100;
  setUpGrid();
}

function toggleRainbowButton() {
  btnRainbow.classList.toggle("btn-rainbow-active");
  if (btnEraser.classList.contains("btn-eraser-active")) {
    btnEraser.classList.remove("btn-eraser-active");
  }
}
function toggleEraserButton() {
  btnEraser.classList.toggle("btn-eraser-active");
  if (btnRainbow.classList.contains("btn-rainbow-active")) {
    btnRainbow.classList.remove("btn-rainbow-active");
  }
}
//only function to be run outside a function
function run() {
  setUpGrid();
  gridSize.addEventListener("change", setUpGrid);
  addColorToGrid();
  btnReset.addEventListener("click", clearGrid);
  btnRainbow.addEventListener("click", toggleRainbowButton);
  btnEraser.addEventListener("click", toggleEraserButton);
}
run();
