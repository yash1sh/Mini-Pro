const dateEl = document.querySelector(".date");
const months = [
  "JAN",
  "FEB",
  "MARCH",
  "APRIL",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const date = new Date();
const date1 = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

dateEl.innerHTML = `${date1} ${months[month]} ${year}`;
