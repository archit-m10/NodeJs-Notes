var http = require('http');
var fs = require('fs');  //fs = file system

function onRequest(request, response) {
    response.writeHead(200,{'Content-Type': 'text/html'});  //we have to change plain to html in the type to get the html text else we will get the full html code on server.
     
    fs.readFile('./index.html',null,function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File Not Found');
        }else {
            response.write(data);
        }
        response.end();
        
    });
    

    
}

http.createServer(onRequest).listen(8000);