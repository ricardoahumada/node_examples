// Asignamos la función a ejecutar
onmessage = mensajeVuelta;

function mensajeVuelta(event) {
    // El objeto event transporta la información 
    // en su propiedad data
    if (event.data == "Datos") {
        postMessage("Datos de vuelta");
    }
    else {
        // Error intencionado
        1/x;
    }
}