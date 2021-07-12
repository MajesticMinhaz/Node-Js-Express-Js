var fileSystem = require('fs');
var http = require('http');
var port = 4119;
var server = http.createServer((request, response) => {
    const callback = (statusCode, message) => {
        response.writeHead(statusCode, {'Content-Type': 'text/html'});
        response.write(message);
        response.end();
    }
    //File Rename function return exiting file rename
    // first of all check view/newfile.txt file already exiting
    if(request.url === '/'){
        //first parameter is file name which is I want to rename and second parameter is my new file name which is I want to do and finnaly third parameter is callback function
        fileSystem.rename('view/newfile.txt', 'view/newfileByRenameFunction.txt', (error)=>{
            if(error){
                callback(404, error.message);
            }else{
                callback(200, "File rename successfully.   Old file name is newfile.txt   new file name is newFileByRenameFunction.txt.      Please check on view/newFileByRenameFunction.   Thank you so much..Happy codding...");
            }
        });
    }else{
        callback(404, "File Not Found");
    }
});

server.listen(port);
console.log("Server is running at http://localhost:4119");
//commad "node filerename.js"