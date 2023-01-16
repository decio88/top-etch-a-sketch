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
      let currentColor = this.style.backgroundColor;
      console.log(currentColor);
      let color = newColor(currentColor);
      this.style.backgroundColor = color;
    });
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

function colorGen() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let rgb = `rgb( ${r}, ${g}, ${b})`;
  return rgb;
}

function newColor(color) {
  let rgb;

  if (color === "") {
    rgb = colorGen();
    return rgb;
  }

  let colorArr = color
    .slice(color.indexOf("(") + 1, color.indexOf(")"))
    .split(", ");

  if (colorArr == [0, 0, 0]) {
    return;
  } else {
    let r = darkenColor(+colorArr[0]);
    let g = darkenColor(+colorArr[1]);
    let b = darkenColor(+colorArr[2]);
    rgb = `rgb( ${r}, ${g}, ${b})`;
  }

  return rgb;
}

function darkenColor(x) {
  x = Math.round(x - x * 0.1);
  if (x < 0) {
    x = 0;
  }
  return x;
}
