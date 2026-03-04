const boton = document.getElementById("btnColor");

boton.addEventListener("click", function() {
    const colores = ["#0DFF00", "#00FFEA", "#FF0000", "#F700FF"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});