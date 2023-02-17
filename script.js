"use strict";

const gridContainer = document.getElementById("grid-container");

function setUpGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`;

  for (let i = 0; i < size ** 2; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
  }
}

//change color on mouse down
function sketch() {
  let changeColor = false;
  document.addEventListener("mousedown", function (e) {
    changeColor = true;
    if (!(e.target === e.target.closest(".grid-item"))) return;
    e.target.classList.add("grid-item-active");
  });

  gridContainer.addEventListener("mouseover", function (e) {
    if (!(e.target === e.target.closest(".grid-item"))) return;
    if (!changeColor) return;
    e.target.classList.add("grid-item-active");
  });
  document.addEventListener("mouseup", function () {
    changeColor = false;
  });
}
function clearGrid() {
  gridContainer.innerHTML = "";
}

setUpGrid(8);
sketch();
