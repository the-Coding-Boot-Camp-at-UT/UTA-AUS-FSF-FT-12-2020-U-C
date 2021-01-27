// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
class Letter {
  constructor(char) {
    // If a character is not a number or a letter, make it visible right away
    // Save the underlying character
    this.visible = !/[a-z1-9]/i.test(char);
    this.char = char;
  }

  // Returns either an underscore or the underlying character depending on `this.visible`
  //    because we call this function toString, when we call `this.letters.join` in
  //    Word.js, JavaScript automatically uses the value we return here
  toString() {
    if (this.visible === true) {
      return this.char;
    }
    return "_";
  }

  getSolution() {
    return this.char;
  }

  // Accepts a user's guess
  guess(charGuess) {
    if (charGuess.toUpperCase() === this.char.toUpperCase()) {
      this.visible = true;
      return true;
    }

    // Otherwise return false
    return false;
  }
}

module.exports = Letter;