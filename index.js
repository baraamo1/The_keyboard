function goToTest() {
    window.location.href = "test.html";
}
let imgno = document.getElementById("no")

document.addEventListener("click", (event) => {
imgno.style.left = `${event.clientX}px`;
imgno.style.top = `${event.clientY}px`;
    imgno.style.display = "block"

});