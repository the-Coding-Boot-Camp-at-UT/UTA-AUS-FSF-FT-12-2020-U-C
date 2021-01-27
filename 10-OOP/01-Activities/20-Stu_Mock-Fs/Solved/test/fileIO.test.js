const fs = require("fs");
const FileIO = require("../fileIO");

jest.mock("fs");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      const fileIO = new FileIO();
      const file = "message.txt";
      let data;
      
      fs.readFileSync.mockReturnValue("Hello World!");
      data = fileIO.read(file);

      expect(data).toEqual("Hello World!");
      expect(fs.readFileSync).lastCalledWith(file, "utf8");
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      const fileIO = new FileIO();
      const path = "message.txt";
      const data = "Hello World!";
    
      fileIO.write(path, data);

      expect(fs.writeFileSync).lastCalledWith(path, data);
    });
  });

  describe("append", () => {
    it("should call fs.appendFileSync with the passed in 'file' and 'data' arguments", () => {
      const fileIO = new FileIO();
      const file = "message.txt";
      const data = "Goodbye World!";
    
      fileIO.append(file, data);

      expect(fs.appendFileSync).lastCalledWith(file, data);
    });
  });
});
