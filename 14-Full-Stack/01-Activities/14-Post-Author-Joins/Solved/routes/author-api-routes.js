const db = require('../models');

module.exports = (app) => {
  app.get('/api/authors', (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Author.findAll({
      include: [db.Post],
    }).then((dbAuthor) => res.json(dbAuthor));
  });

  app.get('/api/authors/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Author.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Post],
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
