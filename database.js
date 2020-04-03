var mysql = require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"api_basic"
})

module.exports = connection;