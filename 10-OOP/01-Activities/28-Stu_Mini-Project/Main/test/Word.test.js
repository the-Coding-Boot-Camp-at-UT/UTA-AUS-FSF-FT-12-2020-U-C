const Word = require("../lib/Word");
const Letter = require("../lib/Letter");

describe("Word class", () => {
  it("Creates an array of Letter objects", () => {
    const word = new Word("hi");

    expect(word.letters).toEqual(
      expect.arrayContaining([expect.objectContaining({ char: "h" })])
    );

    expect(word.letters[0]).toBeInstanceOf(Letter);
  });

  describe("guessLetter", () => {
    it("Correct guess returns true", () => {
      expect(new Word("fish").guessLetter("i")).toBe(true);
    });

    it("Incorrect guess returns false", () => {
      expect(new Word("fish").guessLetter("o")).toBe(false);
    });
  });

  describe("guessedCorrectly ", () => {
    it("returns true if all letters are correct", () => {
      const word = new Word("hi");
      word.guessLetter("h");
      word.guessLetter("i");
      expect(word.guessedCorrectly()).toBe(true);
    });
    it("returns false if at least one letter is incorrect", () => {
      const word = new Word("hi");
      word.guessLetter("h");
      word.guessLetter("a");
      expect(word.guessedCorrectly()).toBe(false);
    });
  });
});
