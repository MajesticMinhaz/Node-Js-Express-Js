var http = require('http');
var url = require('url');
var port = 4119;
var server = http.createServer((request, response) => {
    /*url.parse() mathod retrun an object of urls */
    var myUrl = "https://www.youtube.com/watch?v=JWnpfkA6V2A&list=PLkyGuIcLcmx2qXaZkjCL8-P78i2J5rDOa&index=9";
    var myUrlObj = url.parse(myUrl, true);
    var getHostName = myUrlObj.host; //retrun Host name of this url
    var getPathName = myUrlObj.pathname;    //return Path name of this url
    var getQueryString = myUrlObj.search;    // retrun query string of this url
    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(getHostName+"\n");
    response.write(getPathName+"\n");
    response.write(getQueryString+"\n");
    response.end();

    console.log(`your link is "${myUrl}"`);
    console.log(`your host name is "${getHostName}"`);
    console.log(`your path name is "${getPathName}"`);
    console.log(`your query string name is "${getQueryString}"`);

});

server.listen(port);
console.log(`Your server is running at http://localhost:${port}\n\n`);


/*
Run Command "node index.js"

link : http://localhost:4119/
*/