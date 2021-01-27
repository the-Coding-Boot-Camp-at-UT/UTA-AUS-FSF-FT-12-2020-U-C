const FileIO = require("./fileIO");

const fileIO = new FileIO();

fileIO.write("message.txt", "Hello World!");

const message1 = fileIO.read("message.txt");

console.log(message1);

fileIO.append("message.txt", "\nGoodbye World!");

const message2 = fileIO.read("message.txt");

console.log(message2);
