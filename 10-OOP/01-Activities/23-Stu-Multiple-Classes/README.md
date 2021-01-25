# Multiple Classes

In this activity we will create a store class that allows us to handle different interactions within the store. We will use multiple classes with differing purposes to practice the OOP paradigm.

## Instructions

* Since we will be using Jest in this activity, run `npm install` from your terminal. Remember that the command to run tests is `npm test`.

* Open [test/store.test.js](Unsolved/test/store.test.js) and take a moment to familiarize yourself with the Store class tests.

* In the `store.js` file, create a `Store` class with the following properties:
  * Name
  * Stock
  * Revenue

* In `toy.js`, add the following properties:
  * Name
  * Price
  * Count

* In the `Store` class, create a method called `processProductSale` that takes in the product's name as a parameter. This method should increase the store's revenue by the price of the toy and decrease the toy's count by one.

* If there's no more stock of a given toy, `console.log` a message and do not decrease the toy's `count` property.

* In the `Store` class, add a method called `replenishStock(name, count)` that increases the stock on a toy by the provided `count` parameter.

* `index.js` will be used to instantiate the objects. Uncomment lines as you add functionality.

### Hints

* It is recommended that you use these tests as guidance for this activity. Try working on each bit of functionality in conjuncture with its unit test, only moving on when the test passes.
