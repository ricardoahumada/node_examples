var net = require('net');
var client = new net.Socket();

client.connect(7000, "127.0.0.1");
client.on('data', function (data) {
    console.log('Datos: ' + data);
    client.destroy();
});
client.on('err', function (error) {
    console.log('Error: ' + error);
    client.destroy();
});
// Añade un manejador de evento 'close' para el cliente
client.on('close', function () {
    console.log('Conexión cerrada');
});
