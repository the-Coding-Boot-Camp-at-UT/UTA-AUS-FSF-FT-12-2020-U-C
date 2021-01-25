# Character Creation with Prototypes

In this activity you will generate RPG characters using Objects and prototypes.

## Instructions

* Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)

* Each character created using your constructor should have the following properties...

  * Name: The character's name --> String

  * Profession: What the character does for a living --> String

  * Age: The character's age --> Number

  * Strength: Abstraction for how strong the character is --> Number

  * HitPoints (HP): Abstraction for how much health the character has --> Number

  * PrintStats: Function which prints all of a character's properties to the screen

  * Once you have created your constructor, create two new characters and print their properties to the screen

* Now add 3 methods onto it via the prototype.

  * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.

  * Attack: Function which takes in a second character and subtracts this character's strength from their hitpoints.

  * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

