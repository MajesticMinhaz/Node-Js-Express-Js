var mysql = require('mysql');
var host = "localhost";
var user = "root";
var password = "";
var database = "myDatabase";
//sqlCommandForCreateTable
var sqlCommandForCreateTable = "CREATE TABLE students (Name VARCHAR(255) NOT NULL, Email VARCHAR(255) NOT NULL)";
//make sure that your XMAPP softwere is already running on your local machine.
//copy your localhost username and password and paste to user and password variables..
var databaseConnection = mysql.createConnection({
    //inside createConnection mathod we need three arguments there are host, user and password
    host: host,
    user: user,
    password: password,
    database: database
});
databaseConnection.connect((error)=>{
    //check if the connection error show message else return positive message to console
    if(error){
        console.log(error.message);
        console.log("\nDatabase connection error.")
    }else{
        //create Table
        databaseConnection.query(sqlCommandForCreateTable, (error) => {
            if(error){
                console.log(error.message);
            }else{
                console.log("Table Created successfully.\Table Name : students");
            }
        });
        console.log("Database connection Successful.")
    }
});

//command "node 2createtable.js"
//Refference : https://www.w3schools.com/nodejs/nodejs_mysql.asp