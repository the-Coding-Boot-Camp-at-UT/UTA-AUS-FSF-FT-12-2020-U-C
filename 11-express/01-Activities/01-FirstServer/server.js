// Require/import the HTTP module
const http = require('http');

// Define a port to listen for incoming requests
const PORT = 8080;

// Create a generic function to handle requests and responses
const handleRequest = (request, response) => {
  // Send the below string to the client when the user visits the PORT URL
  response.end(`It Works!! Path Hit: ${request.url}`);
};

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
