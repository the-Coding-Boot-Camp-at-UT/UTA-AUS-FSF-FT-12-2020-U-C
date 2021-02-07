// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// sequelize (lowercase) references our connection to the DB.
const sequelize = require('../config/connection.js');

// Creates a "Chirp" model that matches up with DB
const Chirp = sequelize.define('chirp', {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE,
});

// Syncs with DB
Chirp.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Chirp;
