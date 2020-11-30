/*
 * Author: Kayla Lee
 * Created: November 29, 2020
 * License: Public Domain
 */


URL = "https://xkcd.com/info.0.json"
// URL = "http://xkcd.com/614/info.0.json"

// api

    $.ajax({
        url: URL,
        //data: {},
        type: "GET",
        // dataType : "json"
    })
    .done(function(data) {
        console.log(data);
        var title = data.title;
        var img = data.img;
        var alt = data.alt;
        var dataNum = data.num;
        var html = `
          <div id="api">
            <h2>${title}</h2>
            <img src="${img}" title="${alt}">
            <br><br>
            <button id="prev">Previous</button><button id="next">Next</button>
          </div><br>
          `
          $("#output").append(html);
          
    });

