// Declaración de Paquetes 
var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes/routes.js');
var bodyParser = require('body-parser');
// Referencia a los modelo disponibles 
// creados por Mongoose
var modelo = require('./modelos.js');

var ejs = require('ejs');

// Inicialización del servidor Web
var server = express();
// Inicialización del acceso a datos
var mongoose = mongoose.connect('localhost/Personal');

// Middleware
// Hace que la app use el middleware `bodyParser()` 
// para todas las rutas
server.use(bodyParser());

// Configuración del servidor
server.set('view engine', ejs);
server.set('views', __dirname + '/views');

// Lógica de acceso a datos inicial
var listaPersonas;
modelo.Persona.find({}, function (error, datos) {
    listaPersonas = datos;
    module.exports = listaPersonas;
});


// Sistema de rutas -peticion GET (movible a dir/routes)
server.get('/', function (req, res) {
    res.writeHeader(200);
    res.end("Mensaje de Handshake del servidor");
});

server.get('/dynamic', function (req, res) {
    res.render('dynamic.ejs');
});
server.get('/personal', function (req, res) {
    res.render('crearPersona.ejs');
});

server.get('/listado', function (req, res) {
    res.render('listado.ejs', {listaPersonas: listaPersonas} );
});

// Envios POST
server.post('/decirHola', routes.decirHola);
server.post('/crearPersona', routes.crearPersona);

// Lanzamiento del servidor en un puerto.
server.listen(9000);
