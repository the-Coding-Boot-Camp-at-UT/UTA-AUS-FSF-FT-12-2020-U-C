// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/view.html'));
  });

  // add route loads the add.html page, where users can enter new books to the db
  app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/add.html'));
  });

  // all route loads the all.html page, where all books in the db are displayed
  app.get('/all', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/all.html'));
  });

  // short route loads the short.html page, where short books in the db are displayed
  app.get('/short', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/short.html'));
  });

  // long route loads the long.html page, where long books in the db are displayed
  app.get('/long', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/long.html'));
  });
};
