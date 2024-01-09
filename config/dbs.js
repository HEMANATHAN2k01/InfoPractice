const mysql = require('mysql')

const dbs = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "dammy"
});

try {
    dbs.connect();
    console.log("db-Connected!");
  } catch (err) {
    console.error("Connection error:", err.message);
  }


module.exports = dbs