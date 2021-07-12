var mysql = require('mysql');
var host = "localhost";
var user = "root";
var password = "";
//make sure that your XMAPP softwere is already running on your local machine.
//copy your localhost username and password and paste to user and password variables..
var databaseConnection = mysql.createConnection({
    //inside createConnection mathod we need three arguments there are host, user and password
    host: host,
    user: user,
    password: password
});
databaseConnection.connect((error)=>{
    //check if the connection error show message else return positive message to console
    if(error){
        console.log(error.message);
        console.log("\nDatabase connection error.")
    }else{
        console.log("Database connection Successful.")
    }
});

//command "npm start"
//Refference : https://www.w3schools.com/nodejs/nodejs_mysql.asp