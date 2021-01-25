const TodoList = require("../todoList");
const Todo = require("../todo");

describe("TodoList", () => {
  describe("Initialization", () => {
    // Positive test
    it("should create an object with a 'todos' property set to an empty array when called with the 'new' keyword", () => {
      // Arrange
      const todoList = new TodoList();

      // Assert
      expect(todoList.todos).toEqual([]);
    });
  });

  describe("addTodo", () => {
    // Positive Tests
    it("should add a new 'Todo' object to its 'todos' array", () => {
      // Arrange
      const todoList = new TodoList();
      const todoText = "Mow Lawn";

      // Act
      todoList.addTodo(todoText);

      // Assert
      expect(todoList.todos.length).toEqual(1);
      expect(todoList.todos[0] instanceof Todo).toEqual(true);
      expect(todoList.todos[0].text).toEqual(todoText);
    });

    // Exception test
    it("should throw an error if not provided text", () => {
      // Arrange
      const todoList = new TodoList();
      const err = new Error(
        "Expected parameter 'text' to be a non empty string"
      );
      const cb = () => todoList.addTodo();

      // Assert
      expect(cb).toThrowError(err);
    });
  });

  describe("getNextTodo", () => {
    // Positive test
    it("should return the 0th todo element in the 'todos' array without removing it", () => {
      // Arrange
      const todoList = new TodoList();
      const text1 = "Exercise";
      const text2 = "Wash Car";
      let nextTodo;

      // Act
      todoList.addTodo(text1);
      todoList.addTodo(text2);
      nextTodo = todoList.getNextTodo();

      // Assert
      expect(nextTodo instanceof Todo).toEqual(true);
      expect(nextTodo.text).toEqual(text1);
      expect(todoList.todos.length).toEqual(2);
    });

    // Negative test
    it("should return undefined if there are no todos", () => {
      // Arrange
      const todoList = new TodoList();
      let nextTodo;

      // Act
      nextTodo = todoList.getNextTodo();

      // Assert
      expect(typeof nextTodo).toEqual("undefined");
    });
  });

  describe("completeNextTodo", () => {
    // Positive test
    it("should return and remove the next todo in the list", () => {
      // Arrange
      const todoList = new TodoList();
      const text1 = "Make Dinner";
      const text2 = "Wash Dishes";
      let nextTodo;

      // Act
      todoList.addTodo(text1);
      todoList.addTodo(text2);
      nextTodo = todoList.completeNextTodo();

      // Assert
      expect(nextTodo instanceof Todo).toEqual(true);
      expect(nextTodo.text).toEqual(text1);
      expect(todoList.todos.length).toEqual(1);
      expect(todoList.getNextTodo().text).toEqual(text2);
    });
  });
});
