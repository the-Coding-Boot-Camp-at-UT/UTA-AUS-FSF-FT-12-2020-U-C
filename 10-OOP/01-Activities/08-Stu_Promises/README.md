# 🐛 Refactor Function to use Promises

Work with a partner to resolve the following issues:

* Refactor the `practiceCoding()` function to use promises instead of callbacks.

## Expected Behavior

* When the user enters `node index.js coding`, the following should be logged in the console:

  ```
  Current user activity: coding
  We are coding in promises!
  ```

* When the user enters `node index.js nothing`, the following should be logged in the console:

  ```
  Current user activity: nothing
  Promise rejected: Error: Coding stopped - Student is distracted
  ```

## Actual Behavior

* When the user enters `node index.js coding`, the following is logged in the console:

  ```
  Current user activity: coding
  We are coding!
  ```

* When the user enters `node index.js nothing`, the following is logged in the console.

  ```
  Current user activity: nothing
  { issue: 'Distracted', message: 'Coding stopped' }
  ```

## Steps to Reproduce the Problem

1. Run `node index.js coding` to see the message logged in the console.

2. Run `node index.js nothing` to see the error message logged in the console.

---

## 💡 Hints

How can we use the `resolve()` method to handle the fulfillment of a Promise and the `reject()` method to handle the failure of a Promise?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How could we resolve multiple Promises at once?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.