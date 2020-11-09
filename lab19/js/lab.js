/*
 * Author: Kayla Lee
 * Created: November 8, 2020
 * License: Public Domain
 */


 endpoint="https://api.whatdoestrumpthink.com/api/v1/quotes/random"

// add event listener 
$("#activate").click(function(){
	console.log("pressed");
  // alert("pressed");
	$.ajax({
      // The URL for the request
    url: endpoint,
    // The data to send (will be converted to a query string)
    data: { 
      	api_key: "5JNF4JJDJ33J3JH402900"
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
  })
  // If the request succeeds
  .done(function(data) {
      // alert("Success!");
      var quote = data.message;
      $("#output").append("<p>" + quote)
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) { 
      console.log(errorThrown + " Status:" + status );
	})
})
