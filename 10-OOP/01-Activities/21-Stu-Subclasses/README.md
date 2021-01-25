# SubClasses

In this activity we will extend basic vehicle classes with additional functionality. 

## Instructions

* Open [vehicle.js](Unsolved/vehicle.js) and take a moment to familiarize yourself with the Vehicle class.

  * All vehicles have `id`, `numberOfWheels`, and `sound` properties. `printInfo` prints the id and number of wheels on the vehicle.

* Create a `Car` class that extends the `Vehicle` class. The car should have the following features:
  * A `color` property
  * A passengers property
  * A `checkPassengers()` method that checks to see if there are 4 or less passengers. If not, `console.log` that there are too many passengers.
  * A `useHorn` method that prints the car's sound to the console.

* Create a `Boat` class that also extends the `Vehicle` class. The boat should have the following features:
  * A crew property
  * A `crewSoundOff()` method that prints each member of the crew to the console.
  * A `useHorn` method that prints the boat's sound to the console.
