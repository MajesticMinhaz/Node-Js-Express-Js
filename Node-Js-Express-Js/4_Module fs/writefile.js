var fileSystem = require('fs');
var http = require('http');
var port = 4119;
var server = http.createServer((request, response) => {
    const callback = (statusCode, message) => {
        response.writeHead(statusCode, {'Content-Type': 'text/html'});
        response.write(message);
        response.end();
    }

    if(request.url === '/'){
        //first parameter is file name which is I want to create and second parameter is my file text and finnaly third parameter is callback function
        fileSystem.writeFile('view/newfile.txt', 'I am successfully created', (error)=>{
            if(error){
                callback(404, error.message);
            }else{
                callback(200, "File write successfull..");
            }
        });
    }else{
        callback(404, "File Not Found");
    }
});
server.listen(port);
console.log("server is running at http://localhost:4119");