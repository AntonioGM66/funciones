
let semaforo = ["Rojo", "Verde", "Amarillo"], i = 0;

function cambiarColor() {
    console.log("Luz actual: " + semaforo[i]);
    indice++;

    // Si el índice supera el número de colores, volver a empezar
    if (i >= semaforo.length) {
        i = 0;
    }
}

// Llamar a la función cambiarColor cada 3 segundos (3000 ms)
setInterval(cambiarColor, 3000);
