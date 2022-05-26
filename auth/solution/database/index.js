//Creating the database connection

const mysql = require('mysql2');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);
connection.connect((err)=>{
if(err){
    console.log(err)
}else{
console.log("db connected")
}
})

module.exports = connection






     