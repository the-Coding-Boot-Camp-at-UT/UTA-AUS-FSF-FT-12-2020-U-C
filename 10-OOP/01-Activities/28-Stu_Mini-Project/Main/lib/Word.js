const Letter = require("./Letter");

// The Word class is responsible for creating an array of Letter objects and determining if the user guessed every Letter correctly
class Word {
  constructor(word) {
    // word.split - splits word into array of letters
    // .map - instantiate a new `Letter` for each character and return an array
    // referred to with the instance variable, `letters`
    this.letters = word.split("").map(char => new Letter(char));
  }

  getSolution() {
    return this.letters
      // iterate over each letter and return the solution for each 
      // to form an array of solved letters
      .map(letter => letter.getSolution())
      .join(""); // create a string from the array of solved letters
  }

  // setting `toString()` as a method lets us concatenate it like we would a string!
  toString() {
    return this.letters.join(" "); // see Letter.prototype.toString in Letter.js
  }

  guessLetter(char) {
    // Checks to see if any of the letters in the array match the user's guess and updates `foundLetter`
    let foundLetter = false;
    this.letters.forEach(letter => {
      if (letter.guess(char)) {
        foundLetter = true;
      }
    });

    // return whether we found a letter
    return foundLetter;
  }

  // Returns true if all letters in the word have been guessed
  guessedCorrectly() {
    // The `every` method returns true if the callback function returns true for every element in the array
    return this.letters.every(letter => letter.visible);
  }
}

module.exports = Word;