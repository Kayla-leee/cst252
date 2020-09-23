/*
 * Author: Kayla Lee
 * Created: September 22, 2020
 * License: Public Domain
 */

 // function - enter name and get it sorted

 function sortUserName() {
 	var userName = window.prompt("Enter your name to find out your doppleganger's name in another dimension!");
 	console.log("userName =", userName);
 	// split string to array
 	var nameArray = userName.split('');
 	console.log("nameArray =", nameArray);
 	// sort the array
 	var nameArraySort = nameArray.sort();
 	console.log("nameArraySort =", nameArraySort);
 	// join array back to a string
 	var nameSorted = nameArraySort.join('');
 	console.log("nameSorted =", nameSorted);

 	return nameSorted;
 }

 // output
 document.writeln("There is another you in a dimension far, far away...and you just found out their name: ",
 	sortUserName(), "<br>");