let counter = document.getElementById("count");
let sec = 3;
counter.textContent = sec

const timer = setInterval(() => {
    if(sec > 1){
    sec = sec - 1
    counter.textContent = sec
    
}else if(sec == 1){
    counter.style.display="none"
 clearInterval(timer);
}

}, 1000);