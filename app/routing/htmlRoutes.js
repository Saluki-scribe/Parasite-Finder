//Require path package to get file paths

var path = require("path");

module.exports = function(app) {

    //Routes displaying home page and survey page for user request

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

}; //End module.exports