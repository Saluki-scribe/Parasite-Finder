//Require objects from parasites.js

var parasiteData = require("../app/data/parasites.js");
var hostData = require("../app/data/hosts.js");

module.exports = function(app) {

//Send all parasite objects in parasiteData array to endpoint '/api/parasites'

    app.get("/api/parasites", function(req, res) {
        res.json(parasiteData);
    });

//Send posted information from survey results to the hostData array

    app.post("/api/parasites", function(req, res) {
        res.json(hostData);
    });

};