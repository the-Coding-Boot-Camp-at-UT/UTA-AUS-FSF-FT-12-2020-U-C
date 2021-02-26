const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = "zoo";
const collections = ["animals"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/all", (req, res) => {
  db.animals.find({}, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});

app.get("/name", (req, res) => {
  db.animals.find().sort({ name: 1 }, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});

app.get("/weight", (req, res) => {
  db.animals.find().sort({ weight: -1 }, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
