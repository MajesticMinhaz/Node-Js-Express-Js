var http = require('http');
var port = 4119;
var server = http.createServer((request, response) => {
    response.end("Hello World");
});
server.listen(port);
console.log("server run success...");

/*
Run Command "node index.js"

link : http://localhost:4119/
*/