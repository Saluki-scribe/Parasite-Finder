var parasiteData = require("./parasites.js");

var hostData = [
    {
        "name": "Hilda",
        "photo": "https://unsplash.com/photos/V_xncvgzDoo",
        "scores": [
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
    }
]

module.exports = hostData;