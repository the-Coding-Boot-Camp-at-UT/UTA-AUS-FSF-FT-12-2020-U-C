# 📖 Implement Promise.all() to Wait for Multiple API Calls

Work with a partner to implement the following user story:

* As a developer, I want to be able to wait for the results of multiple API calls before I display the end result.

## Acceptance Criteria

* It's done when the `callAPI` Promise is rejected if the request takes longer than the `maxDuration`.

* It's done when the rejected Promise throws a new error stating `"This request timed out"`. 

* It's done when the `callAPI` Promise is resolved if the request is made within the `maxDuration`.

* It's done when the resolved Promise states `"Response received: #### ms"`, including the duration. 

* It's done when `Promise.all()` is used to capture the array of Promises and return the responses in the console.

## 📝 Notes

Refer to the documentation: 

[MDN Web Docs on Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

## Assets

The following output demonstrates the expected console logs after running `node index.js` in the command line:

Promises array before the timeouts have finished:  [
  Promise { <pending> },
  Promise { <pending> },
  Promise { <pending> },
  Promise { <pending> }
]
Response from Promise.all(): [
  'Response received: 3000ms',
  'Response received: 4000ms',
  'Response received: 5000ms',
  'Response received: 6000ms'
]

---

## 💡 Hints

How are `then()` and `catch()` used in conjunction with Promises?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is the state of each Promise after `setTimeout()` has begun but before it has ended?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.