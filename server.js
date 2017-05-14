
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 6800;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("/app/routing/apiRoutes.js")(app);
require("/app/routing/htmlRoutes.js")(app);



app.get("/", function(req, res) {
  res.send("I am making it!");
});






app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
