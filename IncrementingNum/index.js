const couts = document.querySelectorAll(".cout");

couts.forEach((cout) => {
  cout.innerText = "0";
  const updateCounter = () => {
    const target = +cout.getAttribute("data-target");
    const c = +cout.innerText;

    const inc = target / 300;
    if (c < target) {
      cout.innerText = `${Math.ceil(c + inc)}`;
      setTimeout(updateCounter, 1);
    }else
    cout.innerText=target
  };
  updateCounter();
});
Console.log()
