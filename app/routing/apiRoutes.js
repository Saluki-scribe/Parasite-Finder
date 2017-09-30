//Require objects from parasites.js

var parasiteData = require("../app/data/parasites.js");

module.exports = function(app) {

    app.get("/api/parasites", function(req, res) {
        res.json(parasiteData);
    });

    app.post("/api/parasites", function(req, res) {
        res.json();
    });

};