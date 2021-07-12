var http = require('http');
var port = 4119;
var server = http.createServer((request, response) => {
    /*
    Request :
    get();
    post();
    delete();
    

    This file only used Get method with request and response model...
    */

    /*
    Response: 
    Status code : 400, 200, 500, 404 etc...
    data : json, html, xml etc...
    mainly data divide two parts:
        1.Head and 2. Body..
    
    */


    //create a function for response part all Get Request
    const getResponseFunction = (statusCode, pageName) => {
        response.writeHead(statusCode, {'Content-Type': 'text/html'});
        response.write(`<h1>This is my ${pageName} page</h1>`);
        response.end();
    }

    
    /*
    request.url is return URL of page
    */
    if(request.url === "/"){
        getResponseFunction(200, "Home");
    }else if(request.url === "/about"){
        getResponseFunction(200, "About");
    }else if(request.url === "/contact"){
        getResponseFunction(200, "Contact");
    }else{
        getResponseFunction(404, "Page Not Found");
    }
});

server.listen(port);
console.log("Server is running successfully");

/*
Run Command "node index.js"

link : http://localhost:4119/
link : http://localhost:4119/about
link : http://localhost:4119/contact
if :   http://localhost:4119/minhaz/   simply it is return an erron
This is my page Page Not Found Page..with status code 404....
status code 404 mean Page Not Found..
status code 200 mean OK...
*/