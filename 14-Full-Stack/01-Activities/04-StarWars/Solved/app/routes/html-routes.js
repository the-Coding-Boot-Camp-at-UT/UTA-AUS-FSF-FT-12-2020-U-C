// html-routes.js - this file offers a set of routes for sending users to the various html pages

// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // Index route loads view.html
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/view.html'))
  );

  // Add route loads the add.html page,
  // Where users can enter new characters to the db
  app.get('/add', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/add.html'))
  );

  // All route loads the all.html page,
  // Where all characters in the db are displayed
  app.get('/all', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/all.html'))
  );
};
