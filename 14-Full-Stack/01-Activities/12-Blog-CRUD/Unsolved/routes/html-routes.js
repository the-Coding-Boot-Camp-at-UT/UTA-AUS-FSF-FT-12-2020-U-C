// Dependencies
var path = require('path');

// Routes
module.exports = (app) => {
  // index route loads view.html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/blog.html'));
  });

  // Route to the cms page
  app.get('/cms', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/cms.html'));
  });

  // blog route loads blog.html
  app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/blog.html'));
  });
};
