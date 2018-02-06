var Http = require( 'http' ),
Router = require( 'router' ),
server,
router;
var BodyParser = require( 'body-parser' );

var counter = 0,
messages = { };

router = new Router( );

router.use(BodyParser.text( ));

router.use(function( request, response, next ) {
	console.log( 'Request:', request );
	console.log( 'middleware executed' );
	// Null as there were no errors
	// If there was an error then we could call `next( error );`
	next( null );
});

function createMessage( request, response ) {
	var id = counter += 1;
	message=request.body;
	console.log( 'Create message', id, message );
	messages[id] = message;
	response.writeHead( 201, {
		'Content-Type': 'text/plain',
		'Location': '/message/' + id
	});
	response.end( message );
}

router.post( '/message', createMessage );

server = Http.createServer( function( request, response ) {
	router( request, response, function( error ) {
		if( !error ) {
			response.writeHead( 404 );
		} else {
			//Handle errors
			console.log( error.message, error.stack );
			response.writeHead( 400 );
		}
		response.end( '\n' );
	});
});

server.listen( 8080, function( ) {
	console.log( 'Listening on port 8080' );
});