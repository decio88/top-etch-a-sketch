let container = document.querySelector(".container");

boxGrid();

const btn = document.querySelector(".size");
showDrawing();

btn.addEventListener("click", function () {
  this.classList.add("hoverBtn");
  setTimeout(function () {
    btn.classList.remove("hoverBtn");
  }, 80);
  x = prompt("insert number of boxes per row (100 max)");
  if (x <= 100) {
    resetGrid();
    boxGrid(x);
    showDrawing();
  } else {
    alert("wrong number inserted!");
    return;
  }
});

function showDrawing() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", function () {
      this.classList.add("hovered");
    });
    /*box.addEventListener("mouseout", function () {
    this.classList.remove("hovered");
  });*/
  });
}

function boxRow(x) {
  //create row of div with 16 boxes
  let row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  for (let i = 0; i < x; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    row.appendChild(box);
  }
}

function boxGrid(x = 16) {
  for (let i = 0; i < x; i++) {
    boxRow(x);
  }
}

function resetGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
