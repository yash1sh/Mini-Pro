const body = document.getElementById("body");

function onleft() {
  body.classList.add("hover-left");
  body.classList.remove("hover-right");
}
function onright(){
    body.classList.add("hover-right");
    body.classList.remove("hover-left");
}

function onleave(){
    body.classList.remove("hover-left");
    body.classList.remove("hover-right");
}