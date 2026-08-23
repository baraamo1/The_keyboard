let counter = document.getElementById("count");
let keyboard = document.getElementById("keyboard");
let sec = 3;
let tiemer = document.getElementById("timer");
let wroten = document.getElementById("wroten");
let down = 60;
let the_word = document.getElementById("the_word")
counter.textContent = sec;
keyboard.style.display = "none";
tiemer.textContent = down;
let rndwords = [
    "WATER",
    "HAND",
    "MONKEY",
    "BAG",
    "TIME",
    "TABLE",
    "WEBSITE",
    "BOOK",
    "LAMP",
    "LION",
    "KING",
    "BANANA",
    "APPLE",
    "BOTTON",
    "HAT",
    "BED",
    "SECOND",
    "JAPAN",
    "DESK",
    "Number",
    "FOOD",
    "WATER",
    "JUICE",
    "GAME",
    "BALL"
]

const timer = setInterval(() => {
  if (sec > 1) {
    sec = sec - 1;
    counter.textContent = sec;
  } else if (sec == 1) {
    counter.style.display = "none";
    clearInterval(timer);
    keyboard.style.display = "block ";
        the_word.style.display = "block";
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
