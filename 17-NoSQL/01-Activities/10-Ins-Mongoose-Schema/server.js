const mongoose = require("mongoose");

const Example = require("./exampleModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });

const data = {
  array: ["item1", "item2", "item3"],
  boolean: false,
  string:
    "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
  number: 42
};

Example.create(data)
  .then(dbExample => {
    console.log(dbExample);
  })
  .catch(({ message }) => {
    console.log(message);
  });
