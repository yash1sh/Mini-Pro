const buttons = document.querySelectorAll("button");
const boxs = document.querySelectorAll(".box");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("tran");
    button.parentNode.classList.toggle("active");
    if (button.innerText == "X") button.innerHTML = "V";
    else button.innerHTML = "X";
  });
});
