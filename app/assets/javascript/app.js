$(document).ready(function(){

  $("#submit").on("click", function(event) {
    event.preventDefault();

    var testArray = [];
    var e = $("#q1").val();
    e = parseInt(e);
    testArray.push(e);
    console.log(testArray);


    var newHost = {
      hostName: $("#host-name").val().trim(),
      hostPhoto: $("#host-photo").val().trim(),
      testArray
    };

    console.log(newHost);


  });

//  for (var i = 1; i < 2; i++) {

//  }

/*
    $("#submit").on("click", function(event) {
        event.preventDefault();


  
        // Here we grab the form elements
        var newHost = {
          hostName: $("#host-name").val().trim(),
          hostPhoto: $("#host-photo").val().trim(),
          hostArray: $("#host-array").val().trim()
        };
  
        console.log(newHost);

        $.post("/api/tables", newHost,
        function(data) {

          // If a table is available... tell user they are booked.
          if (data) {
            alert("Yay! You are officially booked!");
          }

          // If a table is available... tell user they on the waiting list.
          else {
            alert("Sorry you are on the wait list");
          }

          // Clear the form when submitting

          $("#host-name").val("");
          $("#host-photo").val("");
          $("#host-array").val("");

        });
    });
    
*/
});
