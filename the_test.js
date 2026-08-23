let counter = document.getElementById("count");
let keyboard = document.getElementById("keyboard");
let sec = 3;
let tiemer = document.getElementById("timer");
let down = 60;
counter.textContent = sec;
keyboard.style.display = "none";
tiemer.textContent = down;

const timer = setInterval(() => {
  if (sec > 1) {
    sec = sec - 1;
    counter.textContent = sec;
  } else if (sec == 1) {
    counter.style.display = "none";
    clearInterval(timer);
    keyboard.style.display = "block ";
    sec --
  }
}, 1000);
const downtime = setInterval(() => {
    if(sec == 0){
  if (down > 1) {
    down = down - 1;
    tiemer.textContent = down;
  } else if (down == 1) {
    clearInterval(downtime);
  }
}
}, 1000);
