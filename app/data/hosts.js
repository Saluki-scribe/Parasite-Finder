var parasiteData = require("./parasites.js");
const replace = require("replace");

var hostData = [
    {
        "name": "Hilda",
        "photo": "",
        "results": [
            5,
            5,
            2,
            1,
            2,
            3,
            4,
            3,
            2,
            2
        ],
        "match": parasiteData[2].name,
        "testimonial": `I don't really like surprises, so I wanted a mild parasite that would stick with me without disrupting my life too much. ${parasiteData[2].name} gave me just that. I'm getting dewormed soon, so we might not go the distance, but this has been not terrible. Thanks, ParasiteFinder!`
    }, 
{"name":"T","photo":"T","results":["1","3","1","4","5","4","2","3","2","5"]}, 
{"name":"T","photo":"T","results[]":["3","3","1","5","4","2","1","5","1","5"]}, 
{"name":"","photo":"","scores[]":["NaN","NaN","NaN","NaN","3","3","NaN","NaN","NaN","NaN"]}, 
{"name":"","photo":"","scores[]":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"","photo":"","results[]":["NaN","NaN","NaN","NaN","3","3","NaN","NaN","NaN","NaN"]}, 
{"name":"T","photo":"T","results[]":["4","1","2","5","2","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"T","photo":"T","results[]":["3","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"Please?","photo":"T","results[]":["NaN","NaN","NaN","NaN","3","NaN","NaN","3","NaN","NaN"]}, 
{"name":"Please!","photo":"","results[]":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"T","photo":"","results[]":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"T","photo":"","results[]":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"","photo":"","results[]":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"","photo":"","results[]":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"","photo":"","results[]":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"","photo":"","results[]":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"","photo":"","results[]":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"","photo":"","results[]":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"","photo":"","results[]":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"","photo":"","results[]":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"","photo":"","results[]":["NaN","NaN","NaN","NaN","3","NaN","NaN","NaN","NaN","NaN"]}, 
{"name":"","photo":"","results[]":["NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","1","NaN"]}//replace
]

module.exports = hostData;