var express = require("express");
var mongoose = require("mongoose");
// import the compression package
var compression = require("compression");

var app = express();
var PORT = process.env.PORT || 3000;

// enable compression middleware
app.use(compression());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/imageperformance", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
