const btns = document.querySelectorAll("button");
const sounds = document.querySelectorAll("audio");
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    songStop();
    sounds.forEach((sound) => {
      if (btn.innerText == sound.id) {
        const plays = document.getElementById(`${sound.id}`);
        plays.play();
      }
    });
  })
);

function songStop() {
  sounds.forEach((sound) => {
    const song = document.getElementById(`${sound.id}`);
    song.pause();
    song.currentTime = 0;
  });
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.style = `Background-image: url("${btn.id}")`;
    // document.body.style = `background-repeat: no-repeat;`;
    // document.body.style = `background: cover;`;
  });
});
