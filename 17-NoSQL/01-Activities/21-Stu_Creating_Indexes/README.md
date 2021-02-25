# Creating Indexes

In this activity, you will create an index on your object store that can be used to query data.

## Instructions

* Write code to request an IndexedDB database instance.
* On success, log the result to your console.
* Inside the `onupgradeneeded` method, create an object store for you database called `toDoList`. Next, create three indexes for your ToDoList called `icebox`, `inprogress` and `complete`.

## 💡 Hint(s)

* Use the [createIndex](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/createIndex) docs if you are stuck.
