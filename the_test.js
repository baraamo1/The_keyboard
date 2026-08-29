let counter = document.getElementById("count");
let keyboard = document.getElementById("keyboard");
let wroted_words = document.getElementById("wroted_words");
let correct_words = document.getElementById("correct_words");
let wrong_words = document.getElementById("wrong_words");
let results = document.getElementById("results")
let sec = 3;
let savedletters = [];
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
results.style.display = "none";
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
    if (down > 0) {
      down = down - 1;
      tiemer.textContent = down;
    } else if (down == 0) {
      keyboard.style.display = "none"
      the_word.style.display = "none"
       wroten.style.display = "none"
       correct_words.textContent = `Correct words :${correct}`
       wrong_words.textContent = `Wrong words :${wrong}`
       wroted_words.textContent = `Num. of wrote words :${numberOfQs}`
       results.style.display = "block";
       document.addEventListener("keydown", (event) => {
          if(event.key == "Enter"){
            window.location.href = "test.html"
          }
       })
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

      if (the_letter == 28) {
        submit.style.border = "solid";
        keys[the_letter - 1].style.border = "none";
      }
    }
  }

  if (
    event.key === "Enter" &&
    the_letter != -1 &&
    the_letter != 26 &&
    the_letter != 27 &&
    the_letter != 28
  ) {
    savedletters[letternum] = keys[the_letter].textContent;
    letternum++;

    wroten.textContent = savedletters.join("");
  }
  //next
  if (event.key === "Enter" && the_letter == 27) {
    if (wroten.textContent == randwords[random]) {
      correct ++;
      console.log(`corrict = ${correct}`);

    } else if (the_word.textContent == "") {
      console.log("write");
    } else {
      wrong ++;
console.log(`WRONGE = ${wrong}`) 
    }
    numberOfQs ++
    random = Math.floor(Math.random() * 25);
    the_word.textContent = randwords[random];
    savedletters = []
    wroten.textContent = ""
  }


  if (event.key === "ArrowLeft") {
    if (the_letter > 0) {
      the_letter--;
      keys[the_letter].style.border = "solid";
      keys[the_letter + 1].style.border = "none";
    }
  }

//del

if(event.key == "Enter" && the_letter == 26){
  wroten.textContent = wroten.textContent.slice(0, -1)
}




});
document.addEventListener("click", (event) => {
  imgno.style.left = `${event.clientX}px`;
  imgno.style.top = `${event.clientY}px`;
  imgno.style.display = "block";
});
