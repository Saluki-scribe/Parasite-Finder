//Require path package to get file paths

var path = require("path");
var express = require("express");
var hostData = require("../data/hosts.js");
var parasiteData = require("../data/parasites.js");
var bodyParser = require("body-parser");
const fs = require("fs");
const replace = require("replace");


var app = express();

//server.js will run this code

module.exports = function(app) {
    
//Send static 'assets' folder files used by the html files to the server

   app.use(express.static('./app/assets'));

//Display survey.html when user requests endpoint '/survey'

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

//Add user's data and survey answers to hosts.js when user clicks "submit" button

   app.post("/survey", function(req, res) {

    //var closestMatch;

        replace({
            regex: "//replace",
            replacement: ", \n" + JSON.stringify(req.body) + "//replace",
            paths: ["app/data/hosts.js"],
            recursive: true,
            silent: true,
        });

        var test = hostData[1].results;
        console.log("Pulled from hostData's results: " + test);

        /*for (var i = 0; i <= 10; i++) {

            if (closestMatch > newScore) {
                match = newScore
            };
        }
*/
    });

//If user types any endpoint that's not "/survey", send user to the home page
    
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}; //End module.exports