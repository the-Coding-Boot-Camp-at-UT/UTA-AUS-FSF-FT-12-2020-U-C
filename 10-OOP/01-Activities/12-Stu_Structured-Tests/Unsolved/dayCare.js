const Child = require("./child");

function DayCare() {
  this.children = [];
  this.capacity = 3;
  this.ageLimit = 6;
}

DayCare.prototype.addChild = function(child) {
  // If not passed a Child object, throw an error
  if (child instanceof Child === false) {
    throw new Error("Expected parameter 'child' to be an instance of Child");
  }

  // If at capacity, return early
  if (this.children.length >= this.capacity) {
    return;
  }

  // If the child is over the age limit, return early
  if (child.age > this.ageLimit) {
    return;
  }

  // Add the child to the `children` array if we made it this far
  this.children.push(child);
};

DayCare.prototype.pickupChild = function(name) {
  // Find the index of a child with the given name
  const index = this.children.findIndex((child) => {
    return child.name === name;
  });

  // If no child is found, return early
  if (index === -1) {
    return;
  }

  // If a child is found, remove it from the `children` array and return it
  return this.children.splice(index, 1)[0];
};

module.exports = DayCare;
