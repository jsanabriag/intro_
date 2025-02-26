let miTexto = document.getElementById("text1");
let miBoton = document.getElementById("boton1");

miBoton.addEventListener("click", function() {
    // Cambiar el color de fondo y el texto en el botón
    miBoton.style.backgroundColor = "purple";
    miBoton.textContent = "Gracias!!!";
    
    // Obtener el texto del cuadro de texto
    let texto = miTexto.value;  // Usamos .value para obtener el texto del input
    console.log("Texto del cuadro de texto:", texto);

    // Verificamos si hay texto en el cuadro de texto
    if (texto.length === 0) {
        document.getElementById("numeroLetras").textContent = "Por favor, ingresa algo de texto.";
        document.getElementById("cibecedario").textContent = "";
        return;
    }

    // Mostrar el número de letras
    let numeroLetras = texto.length;
    document.getElementById("numeroLetras").textContent = "Número de letras: " + numeroLetras;

    // Generar el cibecedario
    let cibecedario = "";
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        cibecedario += "#" + (i + 1) + " " + letra + " ";
    }
    document.getElementById("cibecedario").textContent = "Cibecedario: " + cibecedario;
});
