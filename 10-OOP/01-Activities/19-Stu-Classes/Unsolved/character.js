class Character {
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for NAME are as following:`);
    console.log(`Each attack will do STRENGTH damage.`);
    console.log(`NAME has HITPOINTS hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {}

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class

// Create an interval that alternates attacks every 2000 milliseconds
