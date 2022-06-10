const tagsEl = document.querySelector(".choices");
const textarea = document.getElementById("textarea");
const button = document.getElementById("redo");
textarea.focus();
textarea.addEventListener("keyup", (e) => {
  createTag(e.target.value);
  if (e.key === "Enter") {

    button.disabled = true;

  setTimeout(() => {
    button.disabled = false;
  }, 4000);
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTag(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== " ")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = " ";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerHTML = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlight(randomTag);
    setTimeout(() => {
      unhighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlight(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const taggs = document.querySelectorAll(".tag");
  return taggs[Math.floor(Math.random() * taggs.length)];
}

function highlight(tag) {
  tag.classList.add("highlight");
}
function unhighlight(tag) {
  tag.classList.remove("highlight");
}

button.addEventListener("click", () => {
  button.disabled = true;

  setTimeout(() => {
    button.disabled = false;
  }, 4000);

  setTimeout(() => {
    e.target.value = "";
  }, 10);
  randomSelect();
});
