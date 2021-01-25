const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should reverse a given string", () => {
      const str = "Hello World!";
      const reversed = "!dlroW olleH";

      const result = new Algo().reverse(str);

      expect(result).toEqual(reversed);
    });
  });

  describe("isPalindrome", () => {
    it("should return true if a string is a palindrome", () => {
      const str = "racecar";

      const result = new Algo().isPalindrome(str);

      expect(result).toEqual(true);
    });

    it("should return false if a string is not a palindrome", () => {
      const str = "neon";

      const result = new Algo().isPalindrome(str);

      expect(result).toEqual(false);
    });
  });

  describe("capitalize", () => {
    it("should take a string and return a new string with the first letter of each word capitalized", () => {
      const str = "capitalize every first word of the string.";
      const capitalized = "Capitalize Every First Word Of The String.";

      const result = new Algo().capitalize(str);

      expect(result).toEqual(capitalized);
    });
  });
});
