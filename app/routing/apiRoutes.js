//Require objects from parasites.js

var parasiteData = require("../data/parasites.js");
var hostData = require("../data/hosts.js");

module.exports = function(app) {

//Send all parasite objects in parasiteData array to endpoint '/api/parasites'

    app.get("/api/parasites", function(req, res) {
        res.json(parasiteData);
    });

//Send posted information from survey results to the hostData array

    /*app.post("/survey", function(req, res) {
        hostData.push(req.body);
        //res.json(hostData);
        console.log(hostData);
    });
*/
};