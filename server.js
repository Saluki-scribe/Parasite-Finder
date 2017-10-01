//Require dependences

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var hostData = require("./app/data/hosts.js");


var app = express();
var PORT = 8080;

//Parse posted data

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    
    console.log(`\n\n${req.method} request for '${req.url}' -${JSON.stringify(req.body)}\n\n Current hostData: ${JSON.stringify(hostData)}`);
    
    next();
});

//Add exported routes for htmlRoutes and apiRoutes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

module.exports = app;