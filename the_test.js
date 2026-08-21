let counter = document.getElementById("count");
let sec = 3;
counter.textContent = sec

setInterval(() => {
    if(sec > 1){
    sec = sec - 1
    counter.textContent = sec
    
}

}, 1000);