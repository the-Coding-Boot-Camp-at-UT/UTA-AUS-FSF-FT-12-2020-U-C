const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  describe("Initialization", () => {
    it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
      const dayCare = new DayCare();

      // Verify that the new object has the correct properties
      expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    });
  });

  describe("addChild", () => {
    it("should add a child to the 'children' array", () => {
      // Create new objects to test with
      const child = new Child("Tammy", 1);
      const dayCare = new DayCare();

      // Add the child object to the dayCare object
      dayCare.addChild(child);

      // Verify that the child was added to the children array
      expect(dayCare.children.length).toEqual(1);
      expect(dayCare.children[0]).toBe(child);
    });

    it("should not add a child over the 'ageLimit'", () => {
      const child = new Child("Tammy", 8);
      const dayCare = new DayCare();

      dayCare.addChild(child);

      // Verify that the child was not added to the array
      expect(dayCare.children.length).toEqual(0);
    });

    it("should not add a child if already at capacity", () => {
      const dayCare = new DayCare();
      const child = new Child("Alice", 4);

      // Add three initial objects to the children array
      dayCare.children = [
        new Child("Tammy", 1),
        new Child("Mark", 2),
        new Child("Alvin", 1)
      ];

      dayCare.addChild(child);

      // Verify that the fourth child was not added to the array
      expect(dayCare.children.length).toEqual(3);
    });

    it("should throw an error if not provided a Child object as an argument", () => {
      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameter 'child' to be an instance of Child"
      );

      // Define the code that will throw an error inside a callback function
      const cb = () => {
        const dayCare = new DayCare();
        dayCare.addChild();
      };

      // Verify that the callback function captured the error
      expect(cb).toThrowError(err);
    });
  });

  describe("pickupChild", () => {
    it("should remove the first child found with a given name from 'children' and return it", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      // Remove and return an object from the children array
      const removed = dayCare.pickupChild(child2.name);

      expect(removed).toBe(child2);
      expect(dayCare.children.length).toEqual(2);

      // Verify that child2 is no longer in the children array
      expect(
        dayCare.children.some(child => child.name === child2.name)
      ).toEqual(false);
    });

    it("should return undefined and remove no children if child is not in 'children'", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      // Attempt to pick up a child that doesn't exist
      const removed = dayCare.pickupChild("Fred");

      // Verify that the returned object is undefined
      expect(typeof removed).toEqual("undefined");

      // Verify that no object was removed from the array
      expect(dayCare.children).toEqual([child1, child2, child3]);
    });
  });
});
