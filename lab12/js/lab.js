/*
 * Author: Kayla Lee
 * Created: October 12, 2020
 * License: Public Domain
 */

// fizzbuzz loop - commented out fcn bc we couldn't figure out 
// how to make it work when it's within a fcn

//function fizzBuzz() {
	 for (i=1; i<=200; i++) {
	 	outputEl = document.getElementById("output");
	 	newEl = document.createElement("p");
	 	if (i%105 == 0) {
	 		newEl.innerHTML = i + " - FizzBuzzBoom";
	 		outputEl.appendChild(newEl);
	 		console.log("FizzBuzzBoom");
	 	} else if (i%35 == 0) {
	 		newEl.innerHTML = i + " - BuzzBoom";
	 		outputEl.appendChild(newEl);
	 		console.log("BuzzBoom");
	 	} else if (i%21 == 0) {
	 		newEl.innerHTML = i + " - FizzBoom";
	 		outputEl.appendChild(newEl);
	 		console.log("FizzBoom");
	 	} else if (i%15 == 0) {
	 		newEl.innerHTML = i + " - FizzBuzz";
	 		outputEl.appendChild(newEl);
	 		console.log("FizzBuzz");
	 	} else if (i%3 == 0) {
	 		newEl.innerHTML = i + " - Fizz";
	 		outputEl.appendChild(newEl);
	 		console.log("Fizz");
	 	} else if (i%5 == 0) {
	 		newEl.innerHTML = i + " - Buzz";
	 		outputEl.appendChild(newEl);
	 		console.log("Buzz");
	 	} else if (i%7 == 0) {
	 		newEl.innerHTML = i + " - Boom";
	 		outputEl.appendChild(newEl);
	 		console.log("Boom");
	 	} else {
	 		newEl.innerText = i;
	 		outputEl.appendChild(newEl);
	 		console.log(i);
	 	} 
	 }
//}

