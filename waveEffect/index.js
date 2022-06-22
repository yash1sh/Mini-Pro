const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (val, index) =>
        `<span style="transition-delay:${index * 100}ms">${val} </span>`
    )
    .join("");
});
Console.log(labels);
