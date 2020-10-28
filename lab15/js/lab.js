/*
 * Author: Kayla Lee
 * Created: October 25, 2020
 * License: Public Domain
 */


// constructor for vehicle

class Vehicle {
	constructor (make, model, year, color) {
		this.carmake = make;
		this.carmodel = model;
		this.caryear = year;
		this.carcolor = color;
	}
	info() {
		return "I don't have, but want a " + this.carcolor + " " + this.caryear + " " +
		this.carmake + " " + this.carmodel + "."
	}
}

var car = new Vehicle("Chevy", "Malibu", 2020, "silver ice metallic");
console.log(car.info());

// we add text (including <p> tags to the end of our output div
document.getElementById("output").innerHTML = "<p>" + car.info() + "</p>"; 


/*
Set up game [hangman]
	Create game board [board]
	Create players [player]
Start game loop [hangman]
	Render board [board]
	Generate random word [hangman]
	Display length of word to players [board]
	Get letters from guessers and validate [player]
	If letter is correct, display on letter line [board]
	If wrong, draw body part on hanger [board]
		Display wrong guess on the side
	If game should end [hangman]
		Display victory or loss message
		Stop looping
	Else
		Switch to next player and keep looping [hangman]
*/

/* controls game play
class Hangman
	initialize
		set up board
		set up players
		set up starting player

	play
		loop infinitely
			call the board rendering method
			generate random word
			display length of word to players
			get letters from guessers and validate

	check_game_over
		check_victory
		check_loss

	check_victory
		if board says word is complete
			display victory message

	check_loss
		if board says body is complete
			display loss message




















