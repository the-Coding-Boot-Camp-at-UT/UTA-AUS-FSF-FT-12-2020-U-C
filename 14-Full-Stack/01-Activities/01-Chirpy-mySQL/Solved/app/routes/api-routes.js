// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const connection = require('../config/connection.js');

// Routes
// =============================================================
module.exports = (app) => {
  // Get all chirps
  app.get('/api/all', (req, res) => {
    const dbQuery = 'SELECT * FROM chirps';

    connection.query(dbQuery, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a chirp
  app.post('/api/new', (req, res) => {
    console.log('Chirp Data:');
    console.log(req.body);

    const dbQuery =
      'INSERT INTO chirps (author, body, created_at) VALUES (?,?,?)';

    connection.query(
      dbQuery,
      [req.body.author, req.body.body, req.body.created_at],
      (err, result) => {
        if (err) throw err;
        if (result) {
          console.log('Chirp Successfully Saved!');
          res.json(req.body);
        }
      }
    );
  });
};
