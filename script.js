container = document.querySelector(".container");
boxGrid();

function boxRow() {
  //create row of div with 16 boxes
  let row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  for (let i = 0; i < 16; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    row.appendChild(box);
  }
}

function boxGrid() {
  for (let i = 0; i < 16; i++) {
    boxRow();
  }
}
