// Define variables
myTransport = ["walking", " rides from friends", " Mazda 3"];

myMainRide = {
	make: "Mazda 3",
	model: "Touring",
	color: "Deep Crystal Blue Mica",
	year: 2018,
	age: 2020 - 2018
}


// Output
document.writeln("How I get around: ", myTransport, "<br><br>");
document.writeln("My main transportation: <pre>", 
	JSON.stringify(myMainRide, null, '\t'), "</pre>");
