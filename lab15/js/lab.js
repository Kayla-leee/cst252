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





















