

const http = require("http"); 

function requestHandlerFunction(server_req, server_res){ 

    server_res.write("hello world"); 
    server_res.end(); 

}; 

var server = http.createServer( requestHandlerFunction ); 

server.listen(process.env.PORT);