// Constructor function which can take in a series of values and create objects
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// Associates the method printStats() to the Character constructor, which prints all of the stats for a character
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// Method which determines if "hitpoints" are greater than zero and returns a boolean depending on the outcome
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// Method which takes in a second object and decreases their "hitpoints" by this character's strength
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// Method which increases this character's stats when called
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

warrior.printStats(); // => Crusher HitPoints: 55
warrior.isAlive(); // => Crusher is still alive!

rogue.levelUp();
rogue.printStats(); // => Dodger HitPoints: 75
