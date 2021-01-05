# Local Storage Todo's

In this activity, we will working on storing our todos in `localStorage`. 

## Instructions

* Inside the `init()` function:

  * Set a variable called `storedTodos` that retrieves the todos from `localStorage` and parses the JSON string to an object.

  * Check if the todos were retrieved from `localStorage` and if so, set a `todos` variable with the `storedTodos`.

  * Lastly, render the todos to the DOM.

* Inside the `storeTodos()` function:

  * Stringify and set the "todos" key in `localStorage` to the `todos` array.

## Hint

* You will need to use `JSON.stringify` and `JSON.parse`.
