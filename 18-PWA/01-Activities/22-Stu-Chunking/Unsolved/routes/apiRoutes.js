var db = require("../models");

module.exports = function(app) {
  app.get("/api/images", function(req, res) {
    db.Image.find({}).then(function(dbImages) {
      res.json(dbImages);
    });
  });

  app.get("/api/images/:id", function(req, res) {
    db.Image.findById(req.params.id).then(function(dbImage) {
      res.json(dbImage);
    });
  });


  app.put("/api/images/:id", function(req, res) {
    db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
      res.json(dbImage);
    });
  });
};