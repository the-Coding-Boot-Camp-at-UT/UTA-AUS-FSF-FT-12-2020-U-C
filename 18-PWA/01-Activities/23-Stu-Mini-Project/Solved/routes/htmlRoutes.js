const path = require('path');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });
  app.get('/topic', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/topic.html'));
  });
  app.get('/favorites', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/favorites.html'));
  });
};
