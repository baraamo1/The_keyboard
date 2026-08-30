const select1 = document.getElementById("select");
const select2 = document.getElementById("select2");

let num = 0;
document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight" || event.key == "ArrowLeft") {
    num++;
    if (num % 2 == 0) {
      select1.style.border = "10px solid black";
      select2.style.border = "2px solid black";

    } else {
      select2.style.border = "10px solid black";
      select1.style.border = "2px solid black";
    }
  }

if(event.key === "Enter" && num % 2 == 0){
 window.location.href = "test.html";
}else if(event.key === "Enter" && num % 2 != 0){
    window.location.href = "game.html";
}

});

let imgno = document.getElementById("no");

document.addEventListener("click", (event) => {
  imgno.style.left = `${event.clientX}px`;
  imgno.style.top = `${event.clientY}px`;
  imgno.style.display = "block";
});





/*

if(event.key === "Enter" && num % 2 == 0){
 window.location.href = "test.html";
}else if(event.key === "Enter" && num % 2 != 0){
    window.location.href = "game.html";
}
   */