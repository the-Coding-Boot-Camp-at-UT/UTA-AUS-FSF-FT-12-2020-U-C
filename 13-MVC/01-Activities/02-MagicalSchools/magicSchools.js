// Dependencies
const express = require('express');
const mysql = require('mysql');

// Create express app instance.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  // Be sure to update with your own MySQL password!
  password: '',
  database: 'wizard_schools_db',
});

// Initiate MySQL Connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Routes
app.get('/', (req, res) => {
  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query('SELECT * FROM schools', (err, result) => {
    if (err) throw err;
    // We then begin building out HTML elements for the page.
    let html = '<h1> Magical Schools </h1>';

    // Here we begin an unordered list.
    html += '<ul>';

    // We then map over the retrieved records from the database to populate our HTML file.
    result.map(({ id, name }) => {
      html += `<li><p> ID: ${id}</p>`;
      html += `<p>School: ${name} </p></li>`;
      return html;
    });

    // We close our unordered list.
    html += '</ul>';
    console.log(html);

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
