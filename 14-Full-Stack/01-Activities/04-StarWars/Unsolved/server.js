// Server.js - This file is the initial starting point for the Node/Express server.

// Dependencies
// =============================================================
const express = require('express');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static('app/public'));

// Routes
// =============================================================
require('./app/routes/api-routes.js')(app);

// Here we introduce HTML routing to serve different HTML files
require('./app/routes/html-routes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
