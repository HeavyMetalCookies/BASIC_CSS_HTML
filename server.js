

const http = require("http");
const   fs = require(  "fs");

function requestHandlerFunction(server_req, server_res){

    var ucase_url = server_req.url.toUpperCase();

    //:Basic routing:
    if( ucase_url == "/" ){

        fs.readFile( "./page.htm" , (err,dat)=>{

            if( err ){
                server_res.write("[ERROR_LOADING_FILE:HTM]");
                server_res.end();
            }else{
                server_res.write( dat );
                server_res.end();
            };;
        });;

    }else
    if( ucase_url == "/PAGE.CSS" ){

        fs.readFile( "./page.css" , (err,dat)=>{

            if( err ){
                server_res.write("[ERROR_LOADING_FILE:CSS]");
                server_res.end();
            }else{
                server_res.write( dat );
                server_res.end();
            };;
        });;

    }else{

        server_res.write("[BAD_REQUEST]");
        server_res.end();

    };;


};

var server = http.createServer( requestHandlerFunction);

server.listen(process.env.PORT);
