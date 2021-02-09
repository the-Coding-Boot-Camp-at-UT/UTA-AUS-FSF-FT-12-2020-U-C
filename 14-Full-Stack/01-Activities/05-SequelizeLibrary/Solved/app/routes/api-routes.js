// Dependencies
const Book = require('../models/book.js');

// Routes
module.exports = (app) => {
  // Get all books
  app.get('/api/all', (req, res) => {
    Book.findAll({}).then((results) => res.json(results));
  });

  // Get a specific book
  app.get('/api/:book', (req, res) => {
    Book.findAll({
      where: {
        title: req.params.book,
      },
    }).then((results) => res.json(results));
  });

  // Get all books of a specific genre
  app.get('/api/genre/:genre', (req, res) => {
    Book.findAll({
      where: {
        genre: req.params.genre,
      },
    }).then((results) => res.json(results));
  });

  // Get all books from a specific author
  app.get('/api/author/:author', (req, res) => {
    Book.findAll({
      where: {
        author: req.params.author,
      },
    }).then((results) => res.json(results));
  });

  // Get all "long" books (books 150 pages or more)
  app.get('/api/books/long', (req, res) => {
    Book.findAll({
      where: {
        pages: {
          $gte: 150,
        },
      },
      order: [['pages', 'DESC']],
    }).then((results) => res.json(results));
  });

  // Get all "short" books (books 150 pages or less)
  app.get('/api/books/short', (req, res) => {
    Book.findAll({
      where: {
        pages: {
          $lte: 150,
        },
      },
      order: [['pages', 'ASC']],
    }).then((results) => res.json(results));
  });

  // Add a book
  app.post('/api/new', (req, res) => {
    console.log('Book Data:');
    console.log(req.body);
    Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      pages: req.body.pages,
    }).then((results) => res.json(results));
  });

  // Delete a book
  app.delete('/api/book/:id', (req, res) => {
    console.log('Book ID:');
    console.log(req.params.id);
    Book.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => res.end());
  });
};
