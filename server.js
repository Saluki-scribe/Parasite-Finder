//Require dependences

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 8080;

//Serve static files located in assets folder

app.use(function(req, res, next) {

    console.log(`${req.method} request for '${req.url}'`);
    next();
});

//Parse posted data

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Add exported routes for htmlRoutes and apiRoutes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

module.exports = app;