// Dependencies
const http = require('http');

const PORT = 8080;

const handleRequest = (req, res) => {
  // Saving the request data as a variable
  let requestData = '';

  // When the server receives data...
  req.on('data', (data) => {
    // Add it to requestData.
    requestData += data;
  });

  // When the request has ended...
  req.on('end', () => {
    // Log (server-side) the request method, as well as the data received!
    console.log(`You did a ${req.method}, with the data:\n, ${requestData}`);
    res.end();
  });
};

// Create the server, assign it to a variable called "server"
const server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
