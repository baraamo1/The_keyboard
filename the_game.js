

let keys = document.querySelectorAll(".keys");
let the_letter = -1;




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