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
        databaseConnection.query("CREATE DATABASE myDatabase", (error) => {
            if(error){
                console.log(error.message);
            }else{
                console.log("Database Created successfully.\nDatabase Name : myDatabase");
            }
        });
        console.log("Database connection Successful.")
    }
});

//command "node 1databaseCreation.js"
//Refference : https://www.w3schools.com/nodejs/nodejs_mysql.asp