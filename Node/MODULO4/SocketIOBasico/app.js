var express = require('express3'), 
    http = require('http');
var app = express();
var server = http.createServer(app);

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    app.set('view engine', 'html');
    app.engine('html', require('ejs').renderFile);
    //app.use(express.static(__dirname));

    app.get('/', function (req, res) {
        res.render('./Cliente.html');
    });
}
server.listen(9999, '127.0.0.1');

// PASO 2
// Convertir la conexión estándar en una conexión 
// punto a punto con Web Sockets
var io = require('socket.io').listen(server);

// Importante: toda la funcionalidad del socket
// debe ir dentro del manejador del evento connection
io.sockets.on('connection', function (socket) {
    console.log('Se ha conectado un socket');
    socket.on("mensaje", function () {
        console.log("El socket de cliente se ha iniciado");
        // Ahora viene el envío del servidor al cliente
        var hora = new Date();
        var hora = hora.getHours()+ ":" + hora.getMinutes() + ":" +
        hora.getSeconds() + "." + hora.getMilliseconds(); 
        var mensaje = "Saludos del servidor: "+ hora;
        io.sockets.emit("mensajeServidor", mensaje);
        // la coleccion de sockets contiene la lógica 
        // de mensajería
        
    });

});