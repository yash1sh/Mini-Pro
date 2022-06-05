const jokeEl = document.querySelector(".jokes");
const jkbtn = document.querySelector(".jokebtn");


generateJoke();
function generateJoke() {
  const type = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", type)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.joke);
      jokeEl.innerText = data.joke;
    });
}
jkbtn.addEventListener("click", generateJoke);