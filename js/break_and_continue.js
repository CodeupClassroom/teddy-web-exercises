"use strict";

// Prompt the user for an odd number between 1 and 50.
var input;

do {
    input = prompt("Please input a number between 1 and 50");
} while(input > 50 || input < 1 || isNaN(parseFloat(input)) || input % 2 != 0);

console.log("number to skip is " + input);

// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
for(var i = 1; i <= 50; i++) {
    if(i % 2 == 0) {
        continue;
    }
    if(i == input) {
        console.log("Yikes! Skipping the number " + i);
        continue;
    }

    console.log("Here is an odd number " + i);

}