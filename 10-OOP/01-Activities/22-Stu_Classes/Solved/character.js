class Character {
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }

  // Method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log('------------');
  }

  // Method which determines whether or not a character's "hitpoints" are less then zero
  // Returns true or false depending upon the outcome
  isAlive() {
    if (this.hitPoints <= 0) {
      console.log(`${this.name} has been defeated!`);
      return false;
    }
    return true;
  }

  // Method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    console.log(`${this.name} hit ${opponent.name} for ${this.strength}`);
    opponent.hitPoints -= this.strength;
  }
}

// Creates two unique characters using the "character" constructor
const grace = new Character('Grace', 30, 75);
const dijkstra = new Character('Dijkstra', 20, 105);

// This keeps track of whose turn it is
let graceTurn = true;

grace.printStats();
dijkstra.printStats();

const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  if (!grace.isAlive() || !dijkstra.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game over!');
  } else if (graceTurn) {
    grace.attack(dijkstra);
    dijkstra.printStats();
  } else {
    dijkstra.attack(grace);
    grace.printStats();
  }

  // Switch turns
  graceTurn = !graceTurn;
}, 2000);
