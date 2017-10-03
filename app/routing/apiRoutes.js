//Require objects from parasites.js

var parasiteData = require("../data/parasites.js");
var hostData = require("../data/hosts.js");
var matchData = require("../data/match.js");
const replace = require("replace");
const fs = require("fs");

//LOOP COMPARISON VARIABLES
var currentMatch = [];
var diff;
var currentDiff;
var currentMatch = 100;
var sumDiffArray = [];
var chosenParasite;
var chosenParasitePic;

//server.js will run the below code

module.exports = function(app) {

//Send all parasite objects in parasiteData array to endpoint '/api/parasites'

    app.get("/api/parasites", function(req, res) {
        res.json(parasiteData);
    });

//Send parasite object that is user's chosen match to endpoint 'survey/results'

    app.get("/survey/results", function(req, res) {
        res.json(matchData);
    });
    
//Add user's data and survey answers to hosts.js when user clicks "submit" button

    app.post("/survey", function(req, res) {
    
//use npm 'replace' to add posted object to hosts.js
    
        replace({
            regex: "//replace",
            replacement: ", \n" + JSON.stringify(req.body) + "//replace",
            paths: ["app/data/hosts.js"],
            recursive: true,
            silent: true,
        });

        var currentResults = req.body["results[]"];
        
        console.log("Pulled from hostData's results: " + currentResults);

        var count = 0;
        
        for (var i = 0; i <= 4; i++) {
                        
            if (count <= 5) {
                
                for (var j = 0; j < 10; j++) {
    
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

            if (currentDiff < currentMatch || currentMatch == 100 ) {
                currentMatch = currentDiff;
                chosenParasite = parasiteData[count];
                chosenParasitePic = parasiteData[count].photo;
                console.log("currentDiff = " + currentDiff);
                console.log("currentMatch = " + currentMatch);
                console.log("You currently belong with " + chosenParasite.name + "\n");
            } else {
                console.log("currentDiff = " + currentDiff);
                console.log("currentMatch = " + currentMatch);
                console.log("You currently belong with " + chosenParasite.name + "\n");                    
            }

        };
            
            count += 1;

        }; //End for loop      
        
        console.log("We got the current match for you right here: " + chosenParasite.name + ". Here's a link to its photo: " + chosenParasitePic);

        //Return the user's match as a JSON object. 
       var content = JSON.stringify(chosenParasite);
        
        fs.writeFile("app/data/match.js", "var matchData = [" + content + "]; module.exports = matchData;", 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
        
            console.log("The file was saved!");
        }); 

        
           res.json(chosenParasite);
    

    }); //End app.post function

    

}; //Endo module.exports