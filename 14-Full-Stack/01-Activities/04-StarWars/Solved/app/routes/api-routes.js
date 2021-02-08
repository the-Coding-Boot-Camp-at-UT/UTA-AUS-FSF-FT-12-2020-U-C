// api-routes.js - this file offers a set of routes for displaying and saving data to the db

// Dependencies
const Character = require('../models/character.js');

// Routes
module.exports = (app) => {
  // Search for Specific Character (or all characters) then provides JSON
  app.get('/api/:characters?', (req, res) => {
    if (req.params.characters) {
      // Display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Character.findOne({
        where: {
          routeName: req.params.characters,
        },
      }).then((result) => res.json(result));
    } else {
      Character.findAll().then((result) => res.json(result));
    }
  });

  // If a user sends data to add a new character...
  app.post('/api/new', (req, res) => {
    // Take the request...
    const character = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    const routeName = character.name.replace(/\s+/g, '').toLowerCase();

    // Then add the character to the database using sequelize
    Character.create({
      routeName,
      name: character.name,
      role: character.role,
      age: character.age,
      forcePoints: character.forcePoints,
    });
    res.status(200).json(character);
  });
};
