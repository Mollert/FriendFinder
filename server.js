
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 6800;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use('/static/',express.static(path.join(__dirname ,"app")));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname ,"app/public/home.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
