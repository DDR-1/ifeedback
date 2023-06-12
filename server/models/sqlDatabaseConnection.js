var mysql = require('mysql2');

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

var con = mysql.createConnection({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;