// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// sequelize (lowercase) references my connection to the DB.
const sequelize = require('../config/connection.js');

// Creates a "Book" model that matches up with DB
const Book = sequelize.define('book', {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  genre: Sequelize.STRING,
  pages: Sequelize.INTEGER,
});

// Syncs with DB
Book.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Book;
