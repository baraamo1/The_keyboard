function back() {
    window.location.href = "index.html";
}
let imgno = document.getElementById("no")

function start() {
    window.location.href = "the_test.html";
}
document.addEventListener("click", (event) => {
imgno.style.left = `${event.clientX}px`;
imgno.style.top = `${event.clientY}px`;
    imgno.style.display = "block"

});