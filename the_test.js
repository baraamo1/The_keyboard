let counter = document.getElementById("count");
let keyboard = document.getElementById("keyboard");
let sec = 3;
let savedletters = []
let letternum = 0
let tiemer = document.getElementById("timer");
let wroten = document.getElementById("wroten");
let down = 60;
let the_word = document.getElementById("the_word")
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
    "BALL"
]
let random = Math.floor(
    Math.random() * 25
)
const timer = setInterval(() => {
  if (sec > 1) {
    sec = sec - 1;
    counter.textContent = sec;
  } else if (sec == 1) {
    counter.style.display = "none";
    clearInterval(timer);
    keyboard.style.display = "block ";
    the_word.style.display = "block";
    wroten.style.display = "block"
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
the_word.textContent = randwords[random]





document.addEventListener("keydown", (event) => {

    if(event.key === "ArrowRight"){

      if(the_letter < 25){
        the_letter ++
        
         keys[the_letter].style.border = "solid" ;
        keys[the_letter - 1].style.border = "none"

       


      }
    }
        
        
         if(event.key === "Enter"){
            savedletters[the_letter] = keys[the_letter].textContent;
            wroten.textContent = `${savedletters[the_letter]}`
        }
        
        
        
        if(event.key === "ArrowLeft"){
            if(the_letter > 0){
                
         the_letter --
         keys[the_letter].style.border = "solid" ;
         keys[the_letter +1 ].style.border = "none"
        wroten.textContent = keys[the_letter].textContent;
    }}
}




)