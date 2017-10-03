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

    $.post('/survey', newHost, function(data) {
        alert("Your match is " + data.name);
    });
    
//Display that match data with a pop up modal.

  }); //End on click event

}); //End document ready function