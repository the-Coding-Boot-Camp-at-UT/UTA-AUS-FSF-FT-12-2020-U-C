const Todo = require("./todo");

function TodoList() {
  this.todos = [];
}

TodoList.prototype.addTodo = function(text) {
  this.todos.push(new Todo(text));
};

TodoList.prototype.getNextTodo = function() {
  return this.todos[0];
};

TodoList.prototype.completeNextTodo = function() {
  return this.todos.shift();
};

module.exports = TodoList;
