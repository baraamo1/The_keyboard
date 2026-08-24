let back = document.getElementById("back")
let start = document.getElementById("start")
console.log("TEST JS WORKING");
let change = 2
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowRight" || event.key == "ArrowLeft"){
        change ++
          if(change % 2 == 0){
  
back.style.border = "10px solid black";
start.style.border = "2px solid black";

}else{
start.style.border = "10px solid black";
back.style.border = "2px solid black";

}
    }


    if (event.key == "Enter"){
  if(change % 2 == 0){
   window.location.href = "index.html"
back.style.border = "10px solid black";
}else{
    window.location.href = "the_test.html"
}
}
})
let imgno = document.getElementById("no")



document.addEventListener("click", (event) => {
imgno.style.left = `${event.clientX}px`;
imgno.style.top = `${event.clientY}px`;
    imgno.style.display = "block"

});