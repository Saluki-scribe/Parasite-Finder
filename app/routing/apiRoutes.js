//Require objects from parasites.js

var parasiteData = require("../data/parasites.js");
var hostData = require("../data/hosts.js");
const replace = require("replace");


//LOOP COMPARISON VARIABLES
var currentMatch = [];
var diff;
var currentDiff;
var currentMatch = 0;
var sumDiffArray = [];
var chosenParasite;
var chosenParasitePic;

//server.js will run the below code

module.exports = function(app) {

//Send all parasite objects in parasiteData array to endpoint '/api/parasites'

    app.get("/api/parasites", function(req, res) {
        res.json(parasiteData);
    });

//Send posted information from survey results to the hostData array

    
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
                chosenParasitePic = parasiteData[count].photo;
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
        
        console.log("We got the current match for you right here: " + chosenParasite + ". Here's a link to its photo: " + chosenParasitePic);


    }); //End app.post function

};