# Adding and Getting Data

In this activity, you will create add and retrieve data from an objectStore using a keyPath and index.

## Instructions

* In the `onupgradeneeded` method:

  * Create a `toDoList` object store with a `listID` keyPath that can be used to query on.

  * Create an index for a "column" you'd like to query on. ie: due-date

* In the `onsuccess` method:

  * Create variables for a new `transaction` on your database, `objectStore` and the `index` you created.

  * Add four new items to your object store with the `add` method.

  * Using the `get` method, return an item from your object store.

  * Using the `getAll` method, query by index and return all items.

## 💡 Hint(s)

* Use the following docs if you are stuck.

  * [add](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/add)

  * [get](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/get)

  * [getAll](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/getAll)
