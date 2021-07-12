var fileSystem = require('fs');
var http = require('http');
var port = 4119;
var server = http.createServer((request, response) => {
    //read file .view/home.html
    if(request.url === "/"){
        //using Asyncronus prosses
        //first parameter is file path, second parameter is options which is optional and finnaly third parameter is callback function
        fileSystem.readFile("view/home.html", (error, data)=>{
            if(error){
                console.log(error.message);
            }else{
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
                console.log("Successful.....");
            }
        });
    }else{
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.write('<h1>File not found</h1>');
        response.end();
    }
});

server.listen(port);
console.log('server is running on http://localhost:4119');

//commad is "npm start"