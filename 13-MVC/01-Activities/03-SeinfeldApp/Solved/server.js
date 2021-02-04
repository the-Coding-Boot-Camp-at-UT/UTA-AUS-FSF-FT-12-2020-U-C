// Dependencies
const express = require('express');
const mysql = require('mysql');

// Create instance of express app.
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
  password: '753951',
  database: 'seinfeld',
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
app.get('/cast', (req, res) => {
  connection.query('SELECT * FROM actors ORDER BY id', (err, result) => {
    if (err) throw err;

    let html = '<h1>Actors Ordered BY ID</h1>';

    html += '<ul>';

    result.map(({ id, name, coolness_points, attitude }) => {
      html += `<li><p> ID: ${id}</p>`;
      html += `<p> Name: ${name}</p>`;
      html += `<p> Coolness Points: ${coolness_points}</p>`;
      html += `<p>Attitude: ${attitude}</p></li>`;
      return html;
    });

    html += '</ul>';

    res.send(html);
  });
});

app.get('/coolness-chart', (req, res) => {
  connection.query(
    'SELECT * FROM actors ORDER BY coolness_points DESC',
    (err, result) => {
      if (err) throw err;

      let html = '<h1>Actors by Coolness</h1>';

      html += '<ul>';

      result.map(({ id, name, coolness_points, attitude }) => {
        html += `<li><p> ID: ${id}</p>`;
        html += `<p> Name: ${name}</p>`;
        html += `<p> Coolness Points: ${coolness_points}</p>`;
        html += `<p>Attitude: ${attitude}</p></li>`;
        return html;
      });

      html += '</ul>';

      res.send(html);
    }
  );
});

app.get('/attitude-chart/:att', (req, res) => {
  connection.query(
    'SELECT * FROM actors WHERE attitude = ?',
    [req.params.att],
    (err, result) => {
      if (err) throw err;

      let html = `<h1>Actors With an Attitude of ${req.params.att}</h1>`;

      html += '<ul>';

      result.map(({ id, name, coolness_points, attitude }) => {
        html += `<li><p> ID: ${id}</p>`;
        html += `<p> Name: ${name}</p>`;
        html += `<p> Coolness Points: ${coolness_points}</p>`;
        html += `<p>Attitude: ${attitude}</p></li>`;
        return html;
      });

      html += '</ul>';

      res.send(html);
    }
  );
});

// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
