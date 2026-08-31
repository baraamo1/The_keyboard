let imgno = document.getElementById("no")
const shoot2 = document.querySelectorAll(".the_shoot2");
const shoot1 = document.querySelectorAll(".the_shoot");
let keys = document.querySelectorAll(".keys");
let the_letter = -1;
let x = 75;
let num = 0
let random = Math.floor(
  Math.random() * 26
)
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
let x2 = 25








function moveShootYou(shootNumber) {

    x2 += 0.25;

    shoot1[shootNumber].style.left = x2 + "%";

    if (x2 >= 75) {
        shoot1[shootNumber].style.display = "none";
        return;
    }

    requestAnimationFrame(() => moveShootYou(shootNumber));
}









let save = []
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    if (the_letter < 25) {
      the_letter++;

      keys[the_letter].style.border = "solid";
      keys[the_letter - 1].style.border = "none";

      
    }
  }

if (event.key === "Enter") {

    if (num > 0 && save[num - 1] === the_letter) {
      return;
    }
    shoot1[the_letter].style.display = "block";
    if (num > 0) {
      shoot1[save[num - 1]].style.display = "none";
    }

    save[num] = the_letter;
    x2 = 25;
    moveShootYou(save[num]);

    num++;
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























moveShoot();