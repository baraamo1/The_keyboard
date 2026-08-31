let imgno = document.getElementById("no")
const shoot2 = document.querySelectorAll(".the_shoot2");
const shoot1 = document.querySelectorAll(".the_shoot");
let keys = document.querySelectorAll(".keys");
let the_letter = -1;
let x = 75;
let random = Math.floor(
  Math.random() * 26
)
let x2 = 25

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






});
document.addEventListener("click", (event) => {
  imgno.style.left = `${event.clientX}px`;
  imgno.style.top = `${event.clientY}px`;
  imgno.style.display = "block";
});















function shoot (){
    document.addEventListener("keydown", (event) => {

      if(event.key == ""){}












    })
}





function moveShoot() {
    x -= 0.25;
    shoot2[random].style.left = x + "%";
if (x > 25){
    shoot2[random].style.display = "block";
}
if(x == 25){
  shoot2[random].style.display = "none"
}



    requestAnimationFrame(moveShoot);
}

moveShoot();