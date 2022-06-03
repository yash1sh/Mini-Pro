const boxes = document.querySelectorAll(".content-inner");
window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  const winheight = window.innerHeight;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < winheight) box.classList.add("active");
    else box.classList.remove("active");
  });
}
