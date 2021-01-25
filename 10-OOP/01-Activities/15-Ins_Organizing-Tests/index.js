const TodoList = require("./todoList");

const todoList = new TodoList();

todoList.addTodo("Get Eggs");
todoList.addTodo("Get Milk");
todoList.addTodo("Get Bread");

console.log("Next todo:", todoList.getNextTodo());
todoList.completeNextTodo();

console.log("Next todo:", todoList.getNextTodo());
todoList.completeNextTodo();

console.log("Next todo:", todoList.getNextTodo());
todoList.completeNextTodo();
