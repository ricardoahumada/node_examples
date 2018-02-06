// Declaración de Paquetes 
var express = require('express');
var routes = require('./routes/routes.js');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var server = express();

// Middleware
// Hace que la app use el middleware `bodyParser()` 
// para todas las rutas
server.use(bodyParser());

// Configuración del servidor
server.set('view engine', ejs);
server.set('views', __dirname + '/views');

// Sistema de rutas (movible a dir/routes)
server.get('/', function (req, res) {
    res.writeHeader(200);
    res.end("Mensaje de Handshake del servidor");
});

server.get('/dynamic', function (req, res) {
    res.render('dynamic.ejs');
});

server.post('/decirHola', routes.decirHola);

// Lanzamiento del servidor en un puerto.
server.listen(9000);
