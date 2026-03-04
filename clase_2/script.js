const boton = document.getElementById("btnColor");

let colorActual = "green";

boton.addEventListener("click", function() {
    if (colorActual === "green") {
        document.body.style.backgroundColor = "red";
        colorActual = "red";
    } else {
        document.body.style.backgroundColor = "green";
        colorActual = "green";
    }
});