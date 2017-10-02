$(document).ready(function(){

//When user submits survey, collect data in a new host object and store in hosts.js array via POST

  $("#submit").on("click", function(event) {
    event.preventDefault();

//Hold user's answers for each of the 10 questions

    var scores = [];

for (var i = 1; i <= 10; i++) {

    var e = $("#q" + i).val();
    e = parseInt(e);
    scores.push(e);

}

//Create a new host object with user's submitted information and survey answers

    var newHost = {
      "name": $("#host-name").val().trim(),
      "photo": $("#host-photo").val().trim(),
      "results": scores
    };

    console.log(newHost);

    $.post('/survey', newHost);




    
    function runTableQuery() {
        
              // Here we get the location of the root page.
              // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
              var currentURL = window.location.origin;
        
              // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
              $.ajax({ url: currentURL + "/api/tables", method: "GET" }).done(function(tableData) {
        
                // Here we are logging the URL so we have access to it for troubleshooting
                console.log("------------------------------------");
                console.log("URL: " + currentURL + "/api/tables");
                console.log("------------------------------------");
        
                // Here we then log the NYTData to console, where it will show up as an object.
                console.log(tableData);
                console.log("------------------------------------");
        
                // Loop through and display each of the customers
                for (var i = 0; i < tableData.length; i++) {
        
                  // Create the HTML Well (Section) and Add the table content for each reserved table
                  var tableSection = $("<div>");
                  tableSection.addClass("well");
                  tableSection.attr("id", "tableWell-" + i + 1);
                  $("#tableSection").append(tableSection);
        
                  var tableNumber = i + 1;
        
        
                  // Then display the remaining fields in the HTML (Section Name, Date, URL)
                  $("#tableWell-" + i + 1).append("<h2><span class='label label-primary'>" + tableNumber + "</span> | " + tableData[i].customerID + "</h2>");
                }
              });
            }

            runTableQuery();
    
  }); //End on click event

}); //End document ready function