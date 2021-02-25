# Mini Project

In this activity, you will implement IndexedDB so the budget tracker persists data even when the device is not online. When the device finally reconnects, any pending transactions will be synced with the backend api. Write all of your IndexedDB code in `public/db.js`.

## Instructions

* Create a new db request for a `budget` database.

* Inside `onupgradeneeded`, create an object store called `pending` and set `autoIncrement` to `true`.

* Inside your `saveRecord()` function:

  * Create a transaction on the `pending` object store with `readwrite` access.

  * Access your pending object store.

  * Add a record to your store with the `add` method.

* Inside the `checkDatabase` function:

  * Open a transaction on your `pending` object store.
  
  * Access your `pending` object store.

  * Get all records from store and set to a variable.

* Inside `getAll.onsuccess`:

  * If successful, open a transaction on your `pending` object store.

  * Access your `pending` object store.

  * Clear all items in your store.

## 💡 Hint(s)

* You can use the the comments in `public/db.js` as a guide.

## 🏆 Bonus

* Create a button that resets all funds to zero in your indexedDB.
