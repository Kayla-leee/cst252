/*
 * Author: Kayla Lee
 * Created: September 22, 2020
 * License: Public Domain
 */

// paragraph output
var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
new1El.innerHTML = "Saucin' on 'em like chilli <br> -SVT";
outputEl.appendChild(new1El);


// button and image output
function main() {
	outputEl = document.getElementById("output2");
	outputEl.innerHTML = "Vibing. <br>";

	var new2El = document.createElement("img"); 
 	new2El.src = "./img/patrick.png"; 
	var src = document.getElementById("output2");
	src.appendChild(new2El);
}

// css
document.getElementById("output2").style.margin = "10px";
document.getElementById("output").style.fontSize = "40px";












