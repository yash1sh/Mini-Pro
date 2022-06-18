const buttons = document.querySelectorAll(".effect");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    //This will return at what position user have clicked will derive from the x access
    const y = e.clientY;
    //From the Y access

    const buttonTop = e.target.offsetTop;
    //This will provide from where the button is pressed that is the top or the bottom
    const buttonleft = e.target.offsetLeft;

    const posx = x - buttonleft;
    const posy = y - buttonTop;
    //Here this will provide the positon where the user have clicked according to the given location from the button area
    const span = document.createElement("span");
    span.classList.add("circle");
    span.style.top = posy + "px";
    span.style.left = posx + "px";

    this.appendChild(span);
    setTimeout(() => {
      span.remove();
    }, 1000);
    //As it keeps on adding so remove
  });
});
