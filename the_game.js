let imgno = document.getElementById("no");
const shoot2 = document.querySelectorAll(".the_shoot2");
const shoot1 = document.querySelectorAll(".the_shoot");
let keys = document.querySelectorAll(".keys");
let ground1 = document.getElementById("ground1")
let ground2 = document.getElementById("ground2")
let keyboard = document.getElementById("keyboard")
let ground3 = document.getElementById("ground3")
let timere = document.getElementById("timere")
let down = 60;
let allll = document.getElementById("allll")
let the_letter = -1;
let boom1 = document.getElementById("boom1")
let boom2 = document.getElementById("boom2")
let res = document.getElementById("res")
let point = document.getElementById("point")
let back = document.getElementById("back")

let x = 75;
let sec = 3;
let num = 0;
let correct = 0
let counter = document.getElementById("count")
let random = Math.floor(Math.random() * 26);

function moveShoot() {
  x -= 0.25;

  shoot2[random].style.left = x + "%";

  if (x > 25 && !isTouching(the_letter, random)) {
    shoot2[random].style.display = "block";
  }



  if (x <= 25) {
    shoot2[random].style.display = "none";
    random = Math.floor(Math.random() * 26);
    x = 75;
    shoot2[random].style.display = "block";
  }

  requestAnimationFrame(moveShoot);
}

moveShoot();

let x2 = 25;

function moveShootYou(shootNumber) {
  x2 += 0.25;

  shoot1[shootNumber].style.left = x2 + "%";

if (shootNumber === random && isTouching(shootNumber, random)) {
    shoot1[shootNumber].style.display = "none";
    shoot2[random].style.display = "none";
    correct ++
    return;
}

  if (x2 >= 75) {
    shoot1[shootNumber].style.display = "none";
    return;
  }

  requestAnimationFrame(() => moveShootYou(shootNumber));
}


//clearInterval(downtime);

let save = [];
document.addEventListener("keydown", (event) => {


           if (event.key == "Enter" && down == 0){
      window.location.href = "game.html"
     }

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

function isTouching(shoot1Number, shoot2Number) {
  if (shoot1Number < 0) {
    return false;
  }

  let rectA = shoot1[shoot1Number].getBoundingClientRect();
  let rectB = shoot2[shoot2Number].getBoundingClientRect();

  return !(
    rectA.right < rectB.left ||
    rectA.left > rectB.right ||
    rectA.bottom < rectB.top ||
    rectA.top > rectB.bottom
  );
}






const timer = setInterval(() => {
  if (sec > 1) {
    
    sec = sec - 1;
    counter.textContent = sec;
    
  } else if (sec == 1) {
    counter.style.display = "none";
    clearInterval(timer);
     boom2.style.display = "block"
     boom1.style.display = "block"
      allll.style.display = "flex"

      keyboard.style.display = "block"
      boom2.style.display = "block"
    sec--;
  }
}, 1000);
timere.textContent = down;


const downtime = setInterval(() => {

  if (sec == 0 && down > 0) {
    down--;
    timere.textContent = down;
  }

  if (down == 0) {
           boom2.style.display = "none"
     boom1.style.display = "none"
      allll.style.display = "none"

      keyboard.style.display = "none"
      res.style.display = "block"
      point.textContent = `You got ${correct} points`
      point.style.display = "block"

    clearInterval(downtime);
  }

}, 1000);





      
       
      