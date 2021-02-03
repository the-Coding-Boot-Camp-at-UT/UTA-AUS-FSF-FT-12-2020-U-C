const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'task_saver_db',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }

  console.log(`connected as id ${connection.threadId}`);
});

// Root get route
app.get('/', (req, res) => {
  connection.query('SELECT * FROM tasks;', (err, data) => {
    if (err) throw err;

    // Test it
    // console.log('The solution is: ', data);

    // Test it
    // return res.send(data);

    res.render('index', { tasks: data });
  });
});

// Post route -> back to home
app.post('/', (req, res) => {
  // Test it
  // console.log(`You sent, ${req.body.task}`);

  // Test it
  // return res.send(`You sent, ${req.body.task}`);

  // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
  // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
  // https://en.wikipedia.org/wiki/SQL_injection
  connection.query(
    'INSERT INTO tasks (task) VALUES (?)',
    [req.body.task],
    (err, result) => {
      if (err) throw err;

      res.redirect('/');
    }
  );
});

// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
