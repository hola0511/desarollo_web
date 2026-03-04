const boton = document.getElementById("btnColor");

let colorActual = "white";

boton.addEventListener("click", function() {
    if (colorActual === "white") {
        document.body.style.backgroundColor = "blue";
        colorActual = "blue";
    } else {
        document.body.style.backgroundColor = "white";
        colorActual = "white";
    }
});