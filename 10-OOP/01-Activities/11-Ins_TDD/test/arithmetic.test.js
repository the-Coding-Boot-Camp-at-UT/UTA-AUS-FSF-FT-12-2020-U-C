const Arithmetic = require("../arithmetic");

describe("Arithmetic", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
      const obj = new Arithmetic();

      expect("number" in obj).toEqual(true);
    });

    it("should set 'number' when created", () => {
      const num = 108;

      const obj = new Arithmetic(num);

      expect(obj.number).toEqual(num);
    });

    it("should default 'number' to 0", () => {
      const obj = new Arithmetic();

      expect(obj.number).toEqual(0);
    });
  });

  describe("plus", () => {
    it("should return a new 'Arithmetic' object", () => {
      const obj = new Arithmetic(3).plus(3);

      expect(obj instanceof Arithmetic).toEqual(true);
    });

    it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
      const num = 8;
      const added = 7;
      const sum = num + added;

      const { number } = new Arithmetic(num).plus(added);

      expect(number).toEqual(sum);
    });
  });

  describe("minus", () => {
    it("should return a new 'Arithmetic' object", () => {
      const obj = new Arithmetic(9).minus(4);

      expect(obj instanceof Arithmetic).toEqual(true);
    });

    it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
      const num = 10;
      const subtracted = 17;
      const difference = num - subtracted;

      const { number } = new Arithmetic(num).minus(subtracted);

      expect(number).toEqual(difference);
    });
  });

  describe("value", () => {
    it("should return the 'Arithmetic' object's 'number' value", () => {
      const num = 10;
      const obj = new Arithmetic(num);

      const result = obj.value();

      expect(result).toEqual(num);
    });
  });
});
