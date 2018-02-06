var Http = require( 'http' );

var count = 0;

function requestHandler( request, response ) {
	var message,
	status = 200;
	count += 1;
	switch( request.url ) {
		case '/count':
		message = count.toString( );
		break;
		case '/hello':
		message = 'World';
		break;
		default:
		status = 404;
		message = 'Not Found';
		break;
	}
	response.writeHead( 201, {
		'Content-Type': 'text/plain'
	});
	console.log( request.url, status, message );
	response.end( message );
}

var server = Http.createServer(requestHandler );

server.listen( 8080, function( ) {
	console.log( 'Listening on port 8080' );
});
