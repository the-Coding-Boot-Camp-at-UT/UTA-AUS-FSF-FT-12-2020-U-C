var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/serviceWorkerDemo", {
  useNewUrlParser: true
});

var postSeed = [
  {
    description: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
    title: "React",
    likes: 1,
    date: new Date(Date.now())
  },
  {
    description: "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
    title: "Angular",
    likes: 0,
    date: new Date(Date.now())
  },
  {
    description: "Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications.",
    title: "Vue.js",
    likes: 0,
    date: new Date(Date.now())
  }
];

db.Post.deleteMany({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
