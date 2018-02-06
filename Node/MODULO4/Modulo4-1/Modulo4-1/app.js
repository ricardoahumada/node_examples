var net = require('net');
// El argumento del manejador se establece automáticamente como 
// "listener" para el evento "connection"
var server = net.createServer(function (socket) {
    var fecha = new Date();
    var min = fecha.getMinutes();
    var seg = fecha.getSeconds();
    console.log("Datagram recibido desde: " + 
        socket.remoteAddress + " a las " + min + ":" + seg);
    socket.end("Hola Mundo con Sockets. \n");
});

server.listen(7000, "127.0.0.1");
