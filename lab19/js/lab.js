/*
 * Author: Kayla Lee
 * Created: November 16, 2020
 * License: Public Domain
 */


URL = "https://meowfacts.herokuapp.com/"
URL2 = "https://aws.random.cat/meow?ref=apilist.fun"
// URL2 = "https://dog.ceo/api/breeds/image/random"

// attach click action to button
$('#activate').click(function(){
  console.log("pressed - cat fact"),
    $.ajax({
        url: URL,
        //data: {},
        type: "GET",
        // dataType : "json"
    })
    .done(function(data) {
        console.log(data);
        var catFact = data.data;
        var html = `
          <div id="catFact">
            <p>"${catFact}"</p>
          </div>
          `
          $("#output").append(html);
          
          // calling a second api request by placing another $.ajax inside of
          // the .done function and using success: - by stack overflow user
          // Timothy Aaron
          $.ajax({
            url: URL2,
            type: "GET",
            success: function(data) {
              console.log("pressed - cat image")
              var imageUrl2 = data.file;
              var html = `
              <div id="imageblock">
                <img src="${imageUrl2}"><br>
              </div>
              `
              $("#output").append(html);
            }
          });
          
    })
});

