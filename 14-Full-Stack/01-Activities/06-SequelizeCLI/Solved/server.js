// Dependencies
const express = require('express');

const db = require('./models');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Starts the server to begin listening
db.sequelize
  .sync()
  .then(() => app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`)));
