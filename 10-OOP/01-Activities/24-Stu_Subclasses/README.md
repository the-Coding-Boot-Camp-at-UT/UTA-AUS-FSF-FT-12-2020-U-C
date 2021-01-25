# 📖 Implement Subclasses

Work with a partner to implement the following user story:

* As a developer, I want to extend basic vehicle classes with additional functionality. 

## Acceptance Criteria

* It's done when I have created a `Car` class that extends the `Vehicle` class with the following features:

  * Inherits `id`, `numberOfWheels`, and `sound` from the `Vehicle` class, with `numberOfWheels` set as `4` and `sound` set as `beep`.

  * A `color` property.

  * A `passengers` property, which will hold an array of strings.

  * A `useHorn()` method that prints the car's sound to the console.

  * A `checkPassengers()` method that checks whether there are fewer than four passengers. 
  
    * If there are, print a message of how much room you have left in the car in the console.
    
    * Otherwise, print `"This car only seats 4 people. You have too many passengers!"` in the console.

* It's done when I have created a `Boat` class that extends the `Vehicle` class with the following features:

  * Inherits `id`, `numberOfWheels`, and `sound` from the `Vehicle` class, with `numberOfWheels` set as `0` and `sound` set as `bwom`.

  * A `type` property.

  * A `crew` property, which will hold an array of strings.

  * A `useHorn()` method that prints the boat's sound to the console.

  * A `crewSoundOff()` method that prints each member of the crew `"reporting for duty!"` to the console.
  
## 📝 Notes

Refer to the documentation: 

[MDN Web Docs on extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

---

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can we add additional methods to the `Boat` class after it has been created?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.