var http = require('http');
var fileSystem = require('fs');
var port = 4119;
var server = http.createServer((request, response) => {
    //create a function for read file form view folder
    const filePath = (filePath)=>{
        if(fileSystem.existsSync(filePath)){
            const data =  fileSystem.readFileSync(filePath, 'utf-8');
            response.end(data);
        }else{
            console.log(`File not found: ${filePath}`);
        }
    }

    if(request.url === "/" || request.url === "/home" || request.url === "/Home"){
        filePath('view/home.html');
    }else if(request.url === "/about" || request.url === "/About"){
        filePath('view/about.html');
    }else if(request.url === "/contact" || request.url === "/Contact"){
        filePath('view/contact.html');
    }else{
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.write(`<h1>404 !File Not Found at ${request.url}</h1>`);
        response.end();
    }

});
//for real life port will be black like "sever.listen();"
server.listen(port);
console.log(`Your sever is running at http://localhost:${port}`);