// Dependencies
const connection = require('./connection.js');

// ORM
const tableName = 'todos';

const orm = {
  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  getTodos(callback) {
    const s = `SELECT * FROM ${tableName}`;

    connection.query(s, (err, result) => callback(result));
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.

  deleteTodo(id, callback) {
    const s = `DELETE FROM ${tableName} WHERE id=?`;

    connection.query(s, [id], (err, result) => callback(result));
  },

  addTodo(todo, callback) {
    const s = `INSERT INTO ${tableName} (text, complete) VALUES (?,?)`;
    todo.complete = todo.complete || 0;
    connection.query(s, [todo.text, todo.complete], (err, result) =>
      callback(result)
    );
  },

  editTodo(todo, callback) {
    const s = `UPDATE ${tableName} SET text=? WHERE id=?`;

    connection.query(s, [todo.text, todo.id], (err, result) =>
      callback(result)
    );
  },
};

module.exports = orm;
