/*
 * Author: Kayla Lee
 * Created: November 1, 2020
 * License: Public Domain
 */

// click event to button

$("#summary-button").click(function() {
	$("#summary").removeClass("summary");
	$("#summary").toggleClass("bgcolor1");
	$("#summary").toggleClass("summary");
});

$("#challenges-button").click(function() {
	$("#challenges").removeClass("challenges");
	$("#challenges").toggleClass("bgcolor2");
	$("#challenges").toggleClass("challenges");
});


$("#results-button").click(function() {
	$("#results").removeClass("results");
	$("#results").toggleClass("bgcolor3");
	$("#results").toggleClass("results");
});


// bonus - code referenced from stack overflow user "yottagray"

$("#bonus-button").click(function() {
	if ($('#bonus').attr('class') == "bonus"){
        $('#bonus').removeClass("bonus");
        $('#bonus').toggleClass("bgcolor3");
        console.log("pressed");
    } else if ($('#bonus').attr('class') == "bgcolor3"){
        $('#bonus').removeClass("bgcolor3");
        $('#bonus').toggleClass("bgcolor1");
        console.log("pressed2");
    } else if ($('#bonus').attr('class') == "bgcolor1"){
        $('#bonus').removeClass("bgcolor1");
        $('#bonus').toggleClass("bgcolor2");
        console.log("pressed3");
    } else if ($('#bonus').attr('class') == "bgcolor2"){
        $('#bonus').removeClass("bgcolor2");
        $('#bonus').toggleClass("invisible");
        console.log("pressed4");
    } else if ($('#bonus').attr('class') == "invisible"){
        $('#bonus').removeClass("invisible");
        $('#bonus').toggleClass("bonus");
        console.log("pressed-back-to-normal");
    }
});


