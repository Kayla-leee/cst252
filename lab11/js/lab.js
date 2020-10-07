/*
 * Author: Kayla Lee
 * Created: October 6, 2020
 * License: Public Domain
 */


// pokemon eeveelutions fcn

function eeveeSort(str) {
	len = str.length;
	mod = len % 8;
	if (mod == 0) {
		return "Leafeon"
	}
	else if (mod == 1) {
		return "Jolteon"
	}
	else if (mod == 2) {
		return "Sylveon"
	}
	else if (mod == 3) {
		return "Espeon"
	}
	else if (mod == 4) {
		return "Umbreon"
	}
	else if (mod == 5) {
		return "Vaporeon"
	}
	else if (mod == 6) {
		return "Glaceon"
	}
	else if (mod == 7) {
		return "Flareon"
	}
}

var myButton = document.getElementById("my-button");
myButton.addEventListener("click", function() {
	var name = document.getElementById("input").value;
	var pokemon = eeveeSort(name);
	newText = "<p>Congratulations! Your Eevee will evolve into: " + "<br><br>" + pokemon + "</p>";
	document.getElementById("output").innerHTML = newText;
})