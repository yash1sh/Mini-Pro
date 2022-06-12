const smallcups = document.querySelectorAll(".small-glass");
const liter = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallcups.forEach((cup, ind) => {
  cup.addEventListener("click", () => {
    highlightCups(ind);
  });
});

function highlightCups(ind) {
  console.log(ind == smallcups.length - 1);
  if (
    ind == smallcups.length - 1 &&
    smallcups[smallcups.length - 1].classList.contains("fill")
  ) {
    smallcups.forEach((cup, indx) => {
      if (indx === ind) {
        cup.classList.remove("fill");
        ind--;
      }
    });
  } else {
    if (
      smallcups[ind].classList.contains("fill") &&
      !smallcups[ind].nextElementSibling.classList.contains("fill")
    ) {
      ind--;
    }
  }
  smallcups.forEach((cup, idx) => {
    if (idx <= ind) cup.classList.add("fill");
    else cup.classList.remove("fill");
  });
  console.log(ind);
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".small-glass.fill").length;
  const totalcups = smallcups.length;
  if (fullCups == 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalcups) * 330}px`;
    percentage.innerText = `${Math.trunc((fullCups / totalcups) * 100)}%`;
  }

  if (fullCups === totalcups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liter.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
