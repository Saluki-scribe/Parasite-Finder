//Require path package to get file paths

var path = require("path");
var express = require("express");

var app = express();

module.exports = function(app) {

    //Routes displaying home page and survey page for user request
    
   app.use(express.static('./app/assets'));
    
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}; //End module.exports