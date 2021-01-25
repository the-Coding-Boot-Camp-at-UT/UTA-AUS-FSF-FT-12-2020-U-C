const Letter = require("../lib/Letter");

describe("Letter class", () => {
  it("Characters that aren't digits or letters are instantly visible", () => {
    expect(new Letter("?").visible).toBe(true);
  });

  it("toString returns _ for letters", () => {
    expect(new Letter("a").toString()).toBe("_");
  });

  describe("guess", () => {
    it("Correct guess returns true", () => {
      expect(new Letter("j").guess("j")).toBe(true);
    });

    it("Incorrect guess returns false", () => {
      expect(new Letter("j").guess("l")).toBe(false);
    });
  });

  describe("getSolution", () => {
    it("returns character", () => {
      expect(new Letter("l").getSolution()).toBe("l");
    });
  });
});
