// Dependencies
const http = require('http');
const fs = require('fs');

const PORT = 8080;

const renderWelcomePage = (req, res) => {
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end(
        '<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>'
      );
    } else {
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
};

const renderThankYouPage = (req, res) => {
  // Saving the request posted data as a variable.
  let requestData = '';

  let myHTML =
    "<html><head><title>Hello Noder!</title></head><body><h1>Oops, I didn't get any data</h1></body></html>";

  // When the server receives data, it will add it to requestData.
  req.on('data', (data) => {
    requestData += data;
    console.log('You just posted some data to the server:\n', requestData);

    myHTML = `
    <html>
      <head>
        <title>Hello Noder!</title>
      </head>
      <body>
        <h1>Thank you for the data: </h1>
        <code>${requestData}</code>
      </body>
    </html>
    `;
  });

  // When the request has ended...
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(myHTML);
  });
};

const handleRequest = (req, res) => {
  const path = req.url;

  switch (path) {
    case '/thanks':
      return renderThankYouPage(req, res);
    default:
      return renderWelcomePage(req, res);
  }
};

// Create the server and assign it to a variable called "server"
const server = http.createServer(handleRequest);

// Starts our server.
server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
