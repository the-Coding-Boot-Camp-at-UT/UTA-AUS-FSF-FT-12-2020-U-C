const exphbs = require('express-handlebars');
const express = require('express');
const mysql = require('mysql');

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '753951',
  database: 'quotes_db',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Serve index.handlebars to the root route.
app.get('/', (req, res) => {
  connection.query('SELECT * FROM quotes;', (err, data) => {
    if (err) {
      return res.status(500).end();
    }

    res.render('index', { quotes: data });
  });
});

// Show the user the individual quote and the form to update the quote.
app.get('/:id', (req, res) => {
  connection.query(
    'SELECT * FROM quotes where id = ?',
    [req.params.id],
    (err, data) => {
      if (err) {
        return res.status(500).end();
      }

      console.log(data);
      res.render('single-quote', data[0]);
    }
  );
});

app.post('/api/quotes', (req, res) => {
  connection.query(
    'INSERT INTO quotes (author, quote) VALUES (?, ?)',
    [req.body.author, req.body.quote],
    (err, result) => {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }

      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

app.delete('/api/quotes/:id', (req, res) => {
  connection.query(
    'DELETE FROM quotes WHERE id = ?',
    [req.params.id],
    (err, result) => {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Update a quote by an id and then redirect to the root route.
app.put('/api/quotes/:id', (req, res) => {
  connection.query(
    'UPDATE quotes SET author = ?, quote = ? WHERE id = ?',
    [req.body.author, req.body.quote, req.params.id],
    (err, result) => {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
