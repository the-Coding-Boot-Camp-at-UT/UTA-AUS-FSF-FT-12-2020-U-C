var path = require("path");

module.exports = function(app) {
  app.get("/images/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/detail.html"));
  });

  app.get("/favorites", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/favorites.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};