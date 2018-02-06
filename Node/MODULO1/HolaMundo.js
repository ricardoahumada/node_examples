var http = require('http');

var servidor = http.createServer( function (request, response) {
response.writeHead(200, { 'Content-Type': 'text/html' });
response.write('<p>Hola desde http-Node</p>');
response.end();
});

servidor.listen(9000);
