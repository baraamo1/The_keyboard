let counter = document.getElementById("count");
let keyboard = document.getElementById("keyboard");
let sec = 3;
let savedletters = [];
let submit = document.getElementById("submit");
let letternum = 0;
let numberOfQs = 0;
let correct = 0;
let wrong = 0;
let imgno = document.getElementById("no");
let tiemer = document.getElementById("timer");
let wroten = document.getElementById("wroten");
let down = 60;
let the_word = document.getElementById("the_word");
let keys = document.querySelectorAll(".keys");
let the_letter = -1;
counter.textContent = sec;
keyboard.style.display = "none";
tiemer.textContent = down;
let randwords = [
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
  "BALL",
];
let random = Math.floor(Math.random() * 25);
const timer = setInterval(() => {
  if (sec > 1) {
    sec = sec - 1;
    counter.textContent = sec;
  } else if (sec == 1) {
    counter.style.display = "none";
    clearInterval(timer);
    keyboard.style.display = "block ";
    the_word.style.display = "block";
    wroten.style.display = "block";
    sec--;
  }
}, 1000);
const downtime = setInterval(() => {
  if (sec == 0) {
    if (down > 1) {
      down = down - 1;
      tiemer.textContent = down;
    } else if (down == 1) {
      clearInterval(downtime);
    }
  }
}, 1000);
the_word.textContent = randwords[random];

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    if (the_letter < 27) {
      the_letter++;

      keys[the_letter].style.border = "solid";
      keys[the_letter - 1].style.border = "none";

      if (the_letter == 27) {
        submit.style.border = "solid";
        keys[the_letter - 1].style.border = "none";
      }
    }
  }

  if (
    event.key === "Enter" &&
    the_letter != -1 &&
    the_letter != 26 &&
    the_letter != 27
  ) {
    savedletters[letternum] = keys[the_letter].textContent;
    letternum++;

    wroten.textContent = savedletters.join("");
  }
  //next
  if (event.key === "Enter" && the_letter == 26) {
    if (wroten.textContent == randwords[random]) {
      correct ++;
      console.log(`corrict = ${correct}`);

    } else if (the_word.textContent == "") {
      console.log("write");
    } else {
      wrong ++;
console.log(`WRONGE = ${wrong}`) 
    }

    random = Math.floor(Math.random() * 25);
    the_word.textContent = randwords[random];
  }

  //submit
  if (event.key === "Enter" && the_letter == 27) {
  }

  if (event.key === "ArrowLeft") {
    if (the_letter > 0) {
      the_letter--;
      keys[the_letter].style.border = "solid";
      keys[the_letter + 1].style.border = "none";
    }
  }
});
document.addEventListener("click", (event) => {
  imgno.style.left = `${event.clientX}px`;
  imgno.style.top = `${event.clientY}px`;
  imgno.style.display = "block";
});
