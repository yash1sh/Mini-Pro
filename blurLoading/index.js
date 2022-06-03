const loading = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
let load = 0;

let interval = setInterval(blur, 30); //30 Mili Seconds

function blur() {
  load++;
  if (load == 100) {
    clearInterval(interval);
  }
  loading.innerHTML = load + "%";
  loading.style.opacity = scale(load, 0, 100, 1, 0.2);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
//   console.log(load);

const scale = (curr_number, in_min, in_max, out_min, out_max) => {
  return (
    ((curr_number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
};

//Explain :- Here we have to find that if in range 0 to 100 x is the number what will be x if we have the range from 0 to 1
// or 1 to 0
// Explanation: current number is subtracted with the least number and multiplied it with ( difference between range from last number to first number) and divide it with the difference betweeen first range high to low and add it with min second range
