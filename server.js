


const http = require( "http" );

//: Handles incomming requests from the web:
function requestHandlerFunction( server_req , server_res ){

    server_res.write("hello world");
    server_res.end();

};

//: Constructs your server object:
var server = http.createServer( requestHandlerFunction );

//: Start up the server and listen for internet traffic:
server.listen( process.env.PORT );