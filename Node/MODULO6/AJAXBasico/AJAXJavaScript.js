/*
 * Leer contenido JSON utilizando Ajax 
 */

//window.onload = Inicializar;

//function Inicializar() {
//    alert("Inicializado");

//    leerVentas_Nivel_1();
//}

//
// Esta funcion utiliza XMLHttpRequest Level 1, 
// para dar soporte a los navegadores antiguos
function leerVentas_Nivel_1() {
    var url = "http://localhost:56836/AJAXBasico/ventas.json";
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			actualizarIU(request.responseText);
		}
	};
	request.send(null);
}
// Con XMLHttpRequest Nivel 2 (implementado en los nuevos navegadores
// se puede comprobar el progreso y chequear el evento "load" con el 
// manejador onload en vez de comprobar onreadystatechange

function leerVentas_Nivel_2() {
    var url = "http://localhost:56836/AJAXBasico/ventas.json";
    var request = new XMLHttpRequest();
    // Opcionalmente, podemos indicar el formato de
    // la respuesta.
    request.responseType = "application/json"; 
	request.open("GET", url);
	request.onload = function() {
		if (request.status == 200) {
			actualizarIU(request.responseText);
		}
	};
	request.send(null);
}

function actualizarIU(respuestaJSON) {

    var DivVentas = document.getElementById("DIV_ventas");
    var ventas = JSON.parse(respuestaJSON);
    // Tras el "parsing" disponemos de un array con la información devuelta
	for (var i = 0; i < ventas.length; i++) {
		var venta = ventas[i];
		var div = document.createElement("div");
		div.setAttribute("class", "FormatoVenta");
		div.innerHTML = "Num. Cliente: " + venta.Id + " - Ciudad: " + venta.Ciudad + " - Total ventas: " + venta.TVentas;
		DivVentas.appendChild(div);
	}
}








