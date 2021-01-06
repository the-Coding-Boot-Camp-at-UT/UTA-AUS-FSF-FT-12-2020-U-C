# Number Checker

In this activity we will create a number guessing game.

## Instructions

* Using the [number-checker.html](Unsolved/number-checker.html) as a starting point, add code so that:

  * A computer picks a random number between 1 and 4.

  * Users then “click” the buttons numbered 1 – 4.

  * If the user’s number matches the computer’s number, display text informing them that they've won in the "Result" Card. Otherwise, display text informing them that they've lost.

* If you finish early, try to improve the aesthetics.

* **NOTE:** The `.on()` method is listening for a "click" on _any_ element with a `.btn-choice` class. How do we know which button was clicked?

* **HINT:** Each HTML button element holds a unique value attribute. Research use of _this_ with the [jQuery .val() method](http://api.jquery.com/val/).
