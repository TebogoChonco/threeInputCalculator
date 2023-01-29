// Use prompt function to get input from user:
let x = prompt(`Enter first number`);
let y = prompt(`Enter second number`);

//use Number to indicate that the prompt is for numbers in order to avoid concaternation
var z = Number (x) + Number (y);
document.getElementById("myResults").innerHTML= "Your results are:" + z;

//use if else statement to indicate whether result its a pass or a fail
let Results = z;
if (Results >= 6) {
console.log("Pass");}
else (Results < 6) 
console.log= ("Fail");

document.getElementById ("comment").innerHTML= Results;

