# Complete Todos

In this activity, we will create a "complete" button that successfully removes a todo item from the list when clicked.

## Instructions

* Modify your `renderTodos()` function:

  * When a new todo is created, add a `data-index` for each `li`.

  * Generate a button that says "Complete" and append it to your `li`.

* Add an event listener so that when a user clicks the Complete button, it accesses the `data-index` value and removes that todo element from the list.

## Hint

* You can use `setAttribute` for `data-index` and `splice` to remove your todo from the list.
