# 🏗️ Write and Implement Classes

Work with a partner to implement the following user story:

* As a user, I want a command-line RPG that allows two characters to battle each other.

## Acceptance Criteria

* It's done when a new `Character` can be created with the following properties:

  * `name` is a string that contains the character's name.

  * `strength` is a number that indicates how much damage the character's attacks will inflict.

  * `hitPoints` is a number that indicates how many hit points the character has.

* It's done when each `Character` has the following methods:

  * `printStats()` logs the character's name, strength, and hit points, as follows:

    ```js
    console.log(`Stats for ${this.name} are:\n`)
    console.log(`Each attack will do ${this.strength} damage`)
    console.log(`${this.name} has ${this.hitPoints} hit points remaining`)
    ```

  * `isAlive()` returns a Boolean based on whether or not a character's hit points are less than or equal to zero.

  * `attack()` accepts an opposing `Character` object and subtracts the current character's `strength` from the opponent's `hitPoints`.

* It's done when I can run `node character.js` and see two instances of `Character` battle each other until one of them is defeated.

---

## 💡 Hints

How can we start small? Can we benefit from first trying to make one character attack another until the game is over?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can we add validation to ensure that each character is provided the proper three arguments when created?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.