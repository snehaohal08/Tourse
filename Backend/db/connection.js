const mysql = require("mysql2");

const conn= mysql.createConnection({
    host: "localhost",
    user: "root",  // Change to your MySQL username
    password: "root123",  // Change to your MySQL password
    database: "shree"
})



conn.connect((err)=>{
    if(err)throw err;
    console.log("Db connected");
})

module.exports=conn;