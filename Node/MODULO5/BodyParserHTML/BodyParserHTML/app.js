var express = require('express');

/*
 * body-parser lee el cuerpo de un 
 * formulario y lo almacena en formato
 * JavaScript, accesible mediante 'req.body' 
 */
var bodyParser = require('body-parser');
// Hace que la app use el middleware `bodyParser()` 
// para todas las rutas
app.use(bodyParser());

var app = express();

// Ruta inicial
app.get('/', function (req, res) {
    // El método de accion is '/' y el envío tipo 'POST',
    // así que la ruta -app.post('/', ...- recibe el 
    // contenido del formulario
    var html = '<form action="/" method="post">' +
               'Nombre de usuario:' +
               '<input type="text" name="usuario" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Enviar</button>' +
            '</form>';
    
    res.send(html);
});

// Ruta que recibe el formulario
// -req.body- se rellena con los elementos del formulario
app.post('/', function (req, res) {
    var usuario = req.body.usuario;
    var html = 'Hola: ' + usuario + '.<br>' +
             '<a href="/">Probar otra vez</a>';
    res.send(html);
});

app.listen(9000);