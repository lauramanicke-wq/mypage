// Taschenlampen Effekt
const light = document.querySelector(".mouse-light");

document.addEventListener("mousemove", (e) => {
    light.style.left = e.clientX + "px";
    light.style.top = e.clientY + "px";
});

// Verstecken von der Taschenlampe wenn man über die Work Bilder hovert
document.addEventListener("mouseover", (e) => {
    if (e.target.closest("img")) {
        light.classList.add("hidden");
    } else {
        light.classList.remove("hidden");
    }
});