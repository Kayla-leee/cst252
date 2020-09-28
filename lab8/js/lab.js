/*
 * Author: Kayla Lee
 * Created: September 22, 2020
 * License: Public Domain
 */

// test 1

 function firstThing(test) {
 	console.log (test + ": This is the first thing. <br>")
 }

 function secondThing(test) {
 	console.log (test + ": This is the second thing. <br>")
 }

 function thirdThing(test) {
 	console.log (test + ": This is the third thing. <br>")
 }

 firstThing("TEST 1");
 secondThing("TEST 1");
 thirdThing("TEST 1");


// test 2

setTimeout(function() {
 	firstThing("TEST 2");
 }, 0);

setTimeout(function() {
 	secondThing("TEST 2");
 }, 0);

setTimeout(function() {
 	thirdThing("TEST 2");
 }, 0);


// test 3 - order is 2, 3, 1

setTimeout(function() {
	firstThing("TEST 3");
}, 2000);

setTimeout(function() {
	secondThing("TEST 3");
}, 3000);

setTimeout(function() {
	thirdThing("TEST 3");
}, 1000);


// bonus

function main() {
	outputElement = document.getElementById("output");
	outputElement.innerHTML = "Vibing. <br><br>";

	var img = document.createElement("img"); 
 	img.src = "./img/vibing.png"; 
	var src = document.getElementById("output");
	src.appendChild(img);
}










