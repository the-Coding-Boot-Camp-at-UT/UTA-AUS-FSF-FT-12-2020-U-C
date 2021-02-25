# Creating an Object Store

In this activity, you will create an object store for your IndexedDB database.

## Instructions

* Write code to request an IndexedDB database instance.
* On success, log the result to your console.
* Inside the `onupgradeneeded` method, create an object store for you database called `toDoList`.

## 💡 Hint(s)

* Use the [open](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open) docs to learn about the arguments it takes.
* You can `console.log` the `request` to so what attributes are available to you.

## 🏆 Bonus

* Use the [keyPath](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/keyPath) docs to research what a `keyPath` is and how to add it to your `objectStore`.
