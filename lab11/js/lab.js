/*
 * Author: Kayla Lee
 * Created: October 6, 2020
 * License: Public Domain
 */



// image

	var img = document.createElement("img"); 
	var src = document.getElementById("image");
	src.appendChild(img);


// pokemon eeveelutions fcn

function eeveeSort(str) {
	len = str.length;
	mod = len % 8;
	if (mod == 0) {
		img.src = "./img/leafeon.png"
		return "Leafeon"
	}
	else if (mod == 1) {
		img.src = "./img/jolteon.png"
		return "Jolteon"
	}
	else if (mod == 2) {
		img.src = "./img/sylveon.png"
		return "Sylveon"
	}
	else if (mod == 3) {
		img.src = "./img/espeon.png"
		return "Espeon"
	}
	else if (mod == 4) {
		img.src = "./img/umbreon.png"
		return "Umbreon"
	}
	else if (mod == 5) {
		img.src = "./img/vaporeon.png"
		return "Vaporeon"
	}
	else if (mod == 6) {
		img.src = "./img/glaceon.png"
		return "Glaceon"
	}
	else if (mod == 7) {
		img.src = "./img/flareon.png"
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