const Vehicle = require('./vehicle');

class Boat extends Vehicle {
  constructor(id, type, crew) {
    super(id, 0, 'bwom');
    this.type = type;
    this.crew = crew;
  }

  useHorn() {
    console.log(this.sound);
  }

  crewSoundOff() {
    this.crew.forEach((member) => {
      console.log(`${member} reporting for duty!`);
    });
  }
}

const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();
