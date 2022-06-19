const fill = document.querySelector(".fill");
const Boxes = document.querySelectorAll(".Boxes");

fill.addEventListener("dragstart", dragStarts);
fill.addEventListener("dragend", dragEnd);

Boxes.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", dragDrop);
  //Going through all the boxes as the picture should go in only these boxes
});

function dragStarts() {
  setTimeout(() => (this.className += "hold"), 1);
  setTimeout(() => (this.className = "invisible"), 1);
}

function dragEnd() {
  this.className = "fill";
}
function dragOver(e) {
  e.preventDefault();
  //Passing the element and then removing the default work of that function
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}
function dragLeave() {
  this.className = "Boxes";
}
function dragDrop() {
  this.className = "Boxes";
  this.append(fill);
}
