const right = document.getElementById("right");
const left = document.getElementById("left");
const body = document.body;
const slides = document.querySelectorAll(".slide");

let activeSlide = 0;

setbgToBody();
setActiveSlide();
function setbgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
}

right.addEventListener("click", () => {
  console.log(activeSlide);

  if (activeSlide == slides.length - 1) activeSlide = 0;
  else activeSlide++;
  setbgToBody();
  setActiveSlide();
});

left.addEventListener("click", () => {
  console.log(activeSlide);
  if (activeSlide == 0) activeSlide = 3;
  else activeSlide--;
  setbgToBody();
  setActiveSlide();
});
