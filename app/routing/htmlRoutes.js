//Require path package to get file paths

var path = require("path");
var express = require("express");
var hostData = require("../data/hosts.js");
var parasiteData = require("../data/parasites.js");
var bodyParser = require("body-parser");
const fs = require("fs");
const replace = require("replace");


var app = express();

//LOOP COMPARISON VARIABLES
var currentMatch = [];
var diff;
var currentDiff;
var currentMatch = 0;
var sumDiffArray = [];
//server.js will run this code

module.exports = function(app) {
    
//Send static 'assets' folder files used by the html files to the server

   app.use(express.static('./app/assets'));

//Display survey.html when user requests endpoint '/survey'

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

//Add user's data and survey answers to hosts.js when user clicks "submit" button

   app.post("/survey/api", function(req, res) {

    //var closestMatch;

        replace({
            regex: "//replace",
            replacement: ", \n" + JSON.stringify(req.body) + "//replace",
            paths: ["app/data/hosts.js"],
            recursive: true,
            silent: true,
        });

        var currentResults = req.body["results[]"];
        //var numTest = test.map(function(x) {
        //    return parseInt(x);
        //});
        console.log("Pulled from hostData's results: " + currentResults);

        var count = 0;
        
        for (var i = 0; i <= 4; i++) {
            console.log("Outer for loop runs");
            
            
            if (count <= 5) {
                
                for (var j = 0; j < 10; j++) {
                    
                    console.log("Inner for loop runs");
                    diff = Math.abs(currentResults[j] - parasiteData[count].results[j]);
                    sumDiffArray.push(diff);
                }; //End inner for loop

                console.log(sumDiffArray);
                
                function getSum (total, num) {
                    return total + num;
                }
                
                var getFinal = function () {
                    return sumDiffArray.reduce(getSum, 0);
                }

                console.log("getFinal = " + getFinal());
                
                var currentDiff = getFinal();
                sumDiffArray = [];

                if (currentDiff < currentMatch || currentMatch == 0 ) {
                    currentMatch = currentDiff;
                    chosenParasite = parasiteData[count].name;
                    console.log("currentDiff = " + currentDiff);
                    console.log("currentMatch = " + currentMatch);
                    console.log("You currently belong with " + chosenParasite);
                } else {
                    console.log("currentDiff = " + currentDiff);
                    console.log("currentMatch = " + currentMatch);
                    console.log("You currently belong with " + chosenParasite);                    
                }

            };
            
            count += 1;
        }; //End for loop      
        
    }); //End app.post function

//If user types any endpoint that's not "/survey", send user to the home page
    
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}; //End module.exports