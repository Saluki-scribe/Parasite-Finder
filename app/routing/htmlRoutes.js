//Require path package to get file paths

var path = require("path");
var express = require("express");
var hostData = require("../data/hosts.js");
var bodyParser = require("body-parser");
const fs = require("fs");
const replace = require("replace");


var app = express();

module.exports = function(app) {

    //app.use(bodyParser.urlencoded({ extended: false}));
    //app.use(bodyParser.json());
    //Routes displaying home page and survey page for user request
    
   app.use(express.static('./app/assets'));
    
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

   app.post("/survey", function(req, res) {

    replace({
        regex: "//replace",
        replacement: ", \n" + JSON.stringify(req.body) + "//replace",
        paths: ["app/data/hosts.js"],
        recursive: true,
        silent: true,
    });

    //hostData.push(req.body);

       /* fs.appendFile('app/data/hosts.js', JSON.stringify(req.body), function(err) {

            if (err) {
                console.log(err);
            } else {
                console.log(`req.body contents: ${JSON.stringify(req.body)}`);
                console.log("File updated");
                console.log(`Updated File Contents: ${JSON.stringify(hostData)}`);
                
            };
        });*/
    });
    
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}; //End module.exports