// Dependencies

// Requiring our Todo model
const db = require('../models');

// Routes
module.exports = (app) => {
  // GET route for getting all of the todos
  app.get('/api/todos', (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then((dbTodo) => res.json(dbTodo));
  });

  // POST route for saving a new todo
  app.post('/api/todos', (req, res) => {
    console.log(req.body);
    // Create takes an argument of an object describing the item we want to
    // Insert into our table. We pass in an object with a text and complete property.
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete,
    }).then((dbTodo) => res.json(dbTodo));
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete('/api/todos/:id', (req, res) => {});

  // PUT route for updating todos. We can get the updated todo from req.body
  app.put('/api/todos', (req, res) => {});
};
