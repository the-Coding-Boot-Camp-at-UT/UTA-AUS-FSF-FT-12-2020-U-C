// Dependencies
const Book = require('../models/book.js');

// Routes
module.exports = (app) => {
  // Add sequelize code to get all books and return them as JSON
  app.get('/api/all', (req, res) => {});

  // Add sequelize code to get a specific book and return it as JSON
  app.get('/api/:book', (req, res) => {});

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get('/api/genre/:genre', (req, res) => {});

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get('/api/author/:author', (req, res) => {});

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get('/api/books/long', (req, res) => {});

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get('/api/books/short', (req, res) => {});

  // Add sequelize code to create a book
  app.post('/api/new', (req, res) => {});

  // Add sequelize code to delete a book
  app.delete('/api/book/:id', (req, res) => {});
};
