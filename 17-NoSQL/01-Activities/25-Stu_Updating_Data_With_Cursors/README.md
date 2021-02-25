# Updating Data With Cursors

In this activity, you will be updating records in your object store using a Cursor.

## Instructions

* Inside ` getCursorRequest.onsuccess`

  * Set the `result` to a variable named `cursor`.
  
  * Check the status of each cursor's value and if it's equal to "in-progress", set the status to "complete".

## 💡 Hint(s)

* Use the following [cursor](https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor) methods.

  * `cursor.value`

  * `cursor.update`

  * `cursor.continue`
