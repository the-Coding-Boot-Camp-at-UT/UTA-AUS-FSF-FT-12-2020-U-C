// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
const mysql = require('mysql');

// Setting up our connection information
const source = {
  localhost: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    // Be sure to update with your own MySQL Password!
    password: '',
    database: 'starwars',
  },
};

// Creating our connection
const connection = mysql.createConnection(source.localhost);

// Connecting to the database.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Exporting our connection
module.exports = connection;
