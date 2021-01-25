# 🐛 Store Class Not Functioning Correctly

Work with a partner to resolve the following issues:

* The `Store` class should have the functionality to process sales and replenish their stock.

## Expected Behavior

* When a user buys an item, the `processProductSale()` method should decrement the store's stock of that item and increase the store's revenue by that item's price. 

* When the store replenishes its stock of an item, the `replenishStock()` method should increase the store's stock of that item.

* When I run `npm test`, all of the tests should pass.

* When I run `npm start`, I should see messages logged in the console stating that the rare toy went out of stock but was replenished.

* When I run `npm start`, I should see the store revenue at `80.95` at the end of all the transactions.

## Actual Behavior

* When I run `npm test`, all of the tests fail.

* When I run `npm start`, I see that the rare toy never goes out of stock.

* When I run `npm start`, I see the store revenue at `0` at the end of all the transactions.

## Steps to Reproduce the Problem

1. Run `npm install` from the command line.

2. Run `npm test` from the command line to see the tests run.

3. Run `npm start` from the command line to see transactions logged in the console.

## Assets

The following example demonstrates the expected transactions of the store logged in the console:

  Welcome to Big Als Toy Barn!
  Purchased Action Figure for 14.99
  Purchased Action Figure for 14.99
  Purchased Rare Toy for 17.99
  Purchased Action Figure for 14.99
  Sorry, Rare Toy is out of stock!
  Replenished Rare Toy by 2
  Purchased Rare Toy for 17.99
  The revenue so far is 80.95

---

## 💡 Hints

What do the tests in [store.test.js](./Unsolved/test/store.test.js) tell you about the expected functionality of the `Store` class?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is the `static` keyword, and when would we use static methods?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.