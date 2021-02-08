// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
const mysql = require('mysql');

// Set up our connection information
const connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  // NOTE: Be sure to add your mysql password
  password: '753951',
  database: 'chirpy',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection
module.exports = connection;
