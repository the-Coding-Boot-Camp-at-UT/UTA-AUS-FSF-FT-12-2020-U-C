// Requiring our models
const db = require('../models');

module.exports = (app) => {
  // GET route for getting all of the todos
  app.get('/api/todos', (req, res) => {
    db.Todo.findAll({}).then((dbTodo) => res.json(dbTodo));
  });

  // POST route for saving a new todo
  app.post('/api/todos', (req, res) => {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete,
    }).then((dbTodo) => res.json(dbTodo));
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted
  app.delete('/api/todos/:id', (req, res) => {
    // Destroy takes in one argument: a "where object describing the todos we want to destroy
    db.Todo.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbTodo) => res.json(dbTodo));
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put('/api/todos', (req, res) => {
    // Update takes in two arguments, an object we want to update, and "where" the id = req.body.id
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
    ).then((dbTodo) => res.json(dbTodo));
  });
};
