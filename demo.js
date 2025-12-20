const http = require ('http');
http.createServer(function(req , res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('<h1>hello</h1>');
    console.log("server is running")
}).listen(8080)