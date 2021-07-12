const express = require('express');
var app = express();
var port = 4119;

app.get('/', (request, response) => {
    response.send("We are in home page by get mathod");
});

app.post('/about', (request, response) => {
    response.send("We are now about page by post mathod");
});

app.put('/contact', (request, response) => {
    response.send("we are new contact page by put mathod");
});

app.delete('/author', (request, response) => {
    response.send("Finnaly we are in author page by delete mathod");
});

app.listen(port, ()=>{
    console.log('server is running at http://localhost:4119');
});

//command "npm start"
//search on your browser at http://localhost:4119