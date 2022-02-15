var http = require('http');
var fs = require('fs');

function sendResponse(response){
    response.writeHead(200,{"content-Type":"text/plain"});
    response.write("Hi Meryem");
    response.end();
}

function onRequest(request,response){


        sendResponse(response);

}
http.createServer(onRequest).listen(8080);
console.log("server is running");
