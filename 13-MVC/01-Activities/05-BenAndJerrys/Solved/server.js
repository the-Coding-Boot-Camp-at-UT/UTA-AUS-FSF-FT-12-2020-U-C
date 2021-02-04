// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const { icecreams } = require('./icecreams');

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
app.get('/icecreams/:name', (req, res) => {
  for (let i = 0; i < icecreams.length; i++) {
    if (icecreams[i].name === req.params.name) {
      return res.render('icecream', icecreams[i]);
    }
  }
});

app.get('/icecreams', (req, res) => res.render('ics', { ics: icecreams }));

// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
