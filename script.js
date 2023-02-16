"use strict";

const gridContainer = document.getElementById("grid-container");

function setUpGrid(size) {
  gridContainer.setAttribute("grid-template-column", `repeat(${size},1fr)`);
  gridContainer.setAttribute("grid-template-row", `repeat(${size},1fr)`);

  for (let i = 0; i < size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
  }
}

function clearGrid() {
  gridContainer.innerHTML = "";
}

setUpGrid(8);
