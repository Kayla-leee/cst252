/*
 * Author: Kayla Lee
 * Created: October 4, 2020
 * License: Public Domain
 */


// borrowed code from a friend with her permission

	// Create an event handler within the JS file that listens for a button click.
	var button = document.getElementById("my-button");
	console.log("click", button);

	button.addEventListener("click", function() {
	    // When the button is pushed, prompt the user to 
	    // input their name with the prompt() function.
	    // var name = prompt("What is your name?")
	    var name = document.getElementById("user-name").value;
	    console.log("Your name", name);
	    // Use this input to change the text from ‘Hello, World!’
	    // to ‘Hello’ + the user’s name
	    var heading = document.getElementById("heading");
	    console.log("heading:", heading);
	    heading.innerHTML = "Hello, " + name + "!";

	    // split string to array
	    var nameArray = name.split('');
	    console.log("nameArray", nameArray);

	    // sort the array
		var nameArraySort = nameArray.sort();
		console.log("nameArraySort =", nameArraySort);

		// join array back to a string
		var nameSorted = nameArraySort.join('');
		console.log("nameSorted =", nameSorted);
	    heading.innerHTML = "Hello, " + nameSorted + "!";
	})





// attempted code
	
	// define variables
		// var button = document.getElementById("my-button");
		// var input = document.getElementById("user-name");
		// var heading = document.getElementById("heading");

	// sorting fcn - from lab 7
		// function sortUserName() {
			// split string to array
				// var nameArray = userName.split('');
				// console.log("nameArray", nameArray);
	    	// sort the array
				// var nameArraySort = nameArray.sort();
				// console.log("nameArraySort =", nameArraySort);
			// join array back to a string
				// var nameSorted = nameArraySort.join('');
				// console.log("nameSorted =", nameSorted);

			// return nameSorted; }

	// button fcn - from wes jsfiddle
		// function buttonPress() {
			// get input from field
				// var inputText = input.value;
			// add input to h2
				// heading.innerText = "Hello, " + inputText;
			// clear field value
				// input.value = "";

				// input.focus(); }

	// event listener
		// button.addEventListener("click", function sortUserName() {
			// input = document.getElementById("user-name").value;
			// console.log("Your input: ", inputValue); });



