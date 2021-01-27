const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  describe("Initialization", () => {
    it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
      const dayCare = new DayCare();

      expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    });
  });

  describe("addChild", () => {
    it("should add a child to the 'children' array", () => {
      const child = new Child("Tammy", 1);
      const dayCare = new DayCare();

      dayCare.addChild(child);

      expect(dayCare.children.length).toEqual(1);
      expect(dayCare.children[0]).toBe(child);
    });

    it("should not add a child over the 'ageLimit'", () => {
      const child = new Child("Tammy", 8);
      const dayCare = new DayCare();
      // The following line of code uses the jest.spyOn method to mock and spy on the console.log method.
      const mock = jest.spyOn(console, "log");
      // Replacing console.log with an empty function allows us to spy on the values provided to console.log when the test is run.
      mock.mockImplementation(() => { });

      dayCare.addChild(child);

      expect(dayCare.children.length).toEqual(0);
      // The following message will NOT be logged in the console. jest.spyOn is instead 'spying on' the value pased into console.log and verifying that the expected message is being run.
      expect(mock).toBeCalledWith(
        "Unable to add child, they are over the age limit"
      );
      mock.mockRestore();
    });

    it("should not add a child if already at capacity", () => {
      const dayCare = new DayCare();
      const child = new Child("Alice", 4);
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => { });
      dayCare.children = [
        new Child("Tammy", 1),
        new Child("Mark", 2),
        new Child("Alvin", 1)
      ];

      dayCare.addChild(child);

      expect(dayCare.children.length).toEqual(3);
      expect(mock).toBeCalledWith("At capacity, unable to add more children");

      mock.mockRestore();
    });

    it("should throw an error if not provided a Child object as an argument", () => {
      const err = new Error(
        "Expected parameter 'child' to be an instance of Child"
      );
      const cb = () => {
        const dayCare = new DayCare();
        dayCare.addChild();
      };
      expect(cb).toThrowError(err);
    });
  });

  describe("pickupChild", () => {
    it("should remove the first child found with a given name from 'children' and return it", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      const mock = jest.spyOn(console, "log");
      dayCare.children = [child1, child2, child3];
      mock.mockImplementation(() => { });
      const removed = dayCare.pickupChild(child2.name);

      expect(removed).toBe(child2);
      expect(dayCare.children.length).toEqual(2);
      expect(
        dayCare.children.some(child => child.name === child2.name)
      ).toEqual(false);
      expect(mock).toBeCalledWith(`Picked up ${child2.name} from day care`);
      mock.mockRestore();
    });

    it("should return undefined and remove no children if child is not in 'children'", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      const mock = jest.spyOn(console, "log");
      dayCare.children = [child1, child2, child3];
      mock.mockImplementation(() => { });
      const removed = dayCare.pickupChild("Fred");

      expect(typeof removed).toEqual("undefined");
      expect(dayCare.children).toEqual([child1, child2, child3]);
      expect(mock).toBeCalledWith("Child not found");

      mock.mockRestore();
    });
  });
});