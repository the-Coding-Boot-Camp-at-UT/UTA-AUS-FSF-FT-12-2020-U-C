// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {
  // GET route for getting all of the todos
  app.get('/api/todos', (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then((dbTodo) => {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // POST route for saving a new todo
  app.post('/api/todos', (req, res) => {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete,
    }).then((dbTodo) => res.json(dbTodo));
  });

  // DELETE route for deleting todos. We can get the id from (req.params.id)
  app.delete('/api/todos/:id', (req, res) => {
    // Use the sequelize destroy method to delete a record from our table with the
    // id in req.params.id. res.json the result back to the user
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put('/api/todos', (req, res) => {
    // Use the sequelize update method to update a todo to be equal to the value of req.body
    // req.body will contain the id of the todo we need to update
  });
};
