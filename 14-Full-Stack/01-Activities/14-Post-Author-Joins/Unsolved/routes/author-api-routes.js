const db = require('../models');

module.exports = (app) => {
  app.get('/api/authors', (req, res) => {
    // 1. Add a join to include all of each Author's Posts
    db.Author.findAll({}).then((dbAuthor) => {
      res.json(dbAuthor);
    });
  });

  app.get('/api/authors/:id', (req, res) => {
    // 2; Add a join to include all of the Author's Posts here
    db.Author.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbAuthor) => res.json(dbAuthor));
  });

  app.post('/api/authors', (req, res) => {
    db.Author.create(req.body).then((dbAuthor) => res.json(dbAuthor));
  });

  app.delete('/api/authors/:id', (req, res) => {
    db.Author.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbAuthor) => res.json(dbAuthor));
  });
};
