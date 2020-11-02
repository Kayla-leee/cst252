/*
 * Author: Kayla Lee
 * Created: November 1, 2020
 * License: Public Domain
 */

// button

$("#output").append("<button id='button'>Press Press Press!");

// add click event with alert
$("button").click(function() {
	alert("It really be like that.");
});

// css - green color
$("#button").css("background-color", "#c2edbe");