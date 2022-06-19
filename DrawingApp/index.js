const sub = document.getElementById("sub");
const add = document.getElementById("add");
const num = document.getElementById("num");
const color = document.getElementById("color");
const remove = document.getElementById("remove");
const canvas = document.querySelector(".draw");
const ctx = canvas.getContext("2d");
const body = document.body;
let size = num.innerText;
let isPressed = false;
let x;
let y;

add.addEventListener("click", () => {
  if (num.innerText < 20) num.innerText++;
  size = num.innerText;
});
sub.addEventListener("click", () => {
  if (num.innerText > 0) num.innerText--;
  size = num.innerText;
});

remove.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

let dColor = "black";

document.body.addEventListener("click", () => {
  dColor = color.value;
});

canvas.addEventListener("mousedown", (e) => {
  //   dColor = color.value;

  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drwCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drwCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = dColor;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = dColor;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
