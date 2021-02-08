// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// Sequelize (lowercase) references our connection to the DB.
const sequelize = require('../config/connection.js');

// Creates a "Character" model that matches up with DB
const Character = sequelize.define(
  'character',
  {
    // The routeName gets saved as a string
    routeName: Sequelize.STRING,
    // The name of the character (a string)
    name: Sequelize.STRING,
    // The character's role (a string)
    role: Sequelize.STRING,
    // The character's age (a string)
    age: Sequelize.INTEGER,

    // The character's force points (an int)
    forcePoints: Sequelize.INTEGER,
  },
  {
    // Disable the modification of tablenames; By default, sequelize will automatically
    // Transform all passed model names (first parameter of define) into plural. If not set:
    freezeTableName: true,
  }
);

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
