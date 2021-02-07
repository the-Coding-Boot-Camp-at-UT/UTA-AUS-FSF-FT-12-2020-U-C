// api-routes.js - this file offers a set of routes for displaying and saving data to the db

// Dependencies
const Chirp = require('../models/chirp.js');

// Routes
module.exports = (app) => {
  // Get all chirps
  app.get('/api/all', (req, res) => {
    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous and results are available to us inside the .then
    Chirp.findAll({}).then((results) => res.json(results));
  });

  // Add a chirp
  app.post('/api/new', (req, res) => {
    console.log('Chirp Data:');
    console.log(req.body);

    Chirp.create({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at,
      // `results` here would be the newly created chirp
    }).then((results) => res.json(results));
  });
};
