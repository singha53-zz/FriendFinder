var bodyParser = require('body-parser');
var express = require("express");
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// display API routes before html routes so that the data in read in prior to being displayed
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
})