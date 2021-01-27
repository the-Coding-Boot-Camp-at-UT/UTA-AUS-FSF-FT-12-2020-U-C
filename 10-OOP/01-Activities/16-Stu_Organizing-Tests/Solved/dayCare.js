const Child = require("./child");

function DayCare() {
  this.children = [];
  this.capacity = 3;
  this.ageLimit = 6;
}

DayCare.prototype.addChild = function(child) {
  if (child instanceof Child === false) {
    throw new Error("Expected parameter 'child' to be an instance of Child");
  }

  if (this.children.length >= this.capacity) {
    return;
  }

  if (child.age > this.ageLimit) {
    return;
  }

  this.children.push(child);
};

DayCare.prototype.pickupChild = function(name) {
  const index = this.children.findIndex((child) => {
    return child.name === name;
  });

  if (index === -1) {
    return;
  }

  return this.children.splice(index, 1)[0];
};

module.exports = DayCare;
