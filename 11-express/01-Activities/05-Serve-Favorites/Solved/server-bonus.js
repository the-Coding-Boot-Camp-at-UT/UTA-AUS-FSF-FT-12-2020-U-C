// Require dependencies
const http = require('http');
const fs = require('fs');

// Set our port to 8080
const PORT = 8080;

// function to take a filepath and respond with html
const renderHTML = (filePath, res) => {
  return fs.readFile(`${__dirname}${filePath}`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
};

const handleRequest = (req, res) => {
  // Capture the url the request is made to
  const path = req.url;

  // When we visit different urls, call the function with different arguments
  switch (path) {
    case '/food':
    case '/movies':
    case '/frameworks':
      return renderHTML(`${path}.html`, res);

    default:
      return renderHTML('/index.html', res);
  }
};

// Create the server, assign it to a variable called "server"
const server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
