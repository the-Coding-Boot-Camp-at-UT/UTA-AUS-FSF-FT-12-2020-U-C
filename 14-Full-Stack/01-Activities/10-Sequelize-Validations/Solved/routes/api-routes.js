// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {
  // GET route for getting all of the todos
  // findAll returns all entries for a table when used with no options
  app.get('/api/todos', (req, res) => {
    db.Todo.findAll({}).then((dbTodo) => res.json(dbTodo));
  });

  // POST route for saving a new todo
  app.post('/api/todos', (req, res) => {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete,
    })
      .then((dbTodo) => res.json(dbTodo))
      .catch((err) => res.json(err));
  });

  // DELETE route for deleting todos using the id (req.params.id)
  app.delete('/api/todos/:id', (req, res) => {
    // We just have to specify which todo we want to destroy with "where"
    db.Todo.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbTodo) => res.json(dbTodo));
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put('/api/todos', (req, res) => {
    db.Todo.update(
      {
        text: req.body.text,
        complete: req.body.complete,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then((dbTodo) => res.json(dbTodo))
      .catch((err) => res.json(err));
  });
};
