# Speed Reader 

In this activity, you are going to create a speed reading application. It will render a single word on the screen one at a time every second. This equates to reading at 60 Words Per Minute (WPM).

## Instructions

* The app should countdown from 5, and when the countdown is finished, it should print one word to the screen every second. Each word replaces the other.

* Open [index.html](Unsolved/index.html) and examine the HTML code in the `<body>`.

* Open [script.js](Unsolved/assets/js/script.js) and complete the `countdown()` function that will count down from 5.

  * Complete the `setInterval()` method to call a function to be executed every 1000 milliseconds.

  * As long as the `timeLeft` is greater than 1, set the `textContent` of `timerEl` to show the remaining seconds (i.e. 5 seconds left), and decrement `timeLeft` by 1.

  * Once the `timeLeft` gets to 0, set the `textContent` of `timerEl` to an empty string, use `clearInterval()` to stop the timer, and call the `displayMessage()` function.

## Hint(s)

* Look at the `displayMessage()` function to see an example of how to use `setInterval()` and `clearInterval()`.

## Bonus

* When `timeLeft` is equal to `1`, render "1 second left" instead of "1 seconds left".