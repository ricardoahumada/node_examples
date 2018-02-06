var Http = require( 'http' );

var count = 0;

function requestHandler( request, response ) {
	var message;
	count += 1;
	response.writeHead( 201, {
		'Content-Type': 'text/plain'
	});
	message = 'Visitor count: ' + count + ', path: ' + request.url;
	console.log( message );
	response.end( message );
}

var server = Http.createServer(requestHandler );
server.listen( 8080, function( ) {
	console.log( 'Listening on port 8080' );
});
