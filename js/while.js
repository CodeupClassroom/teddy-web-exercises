"use strict";

var number = 2;
var end = 65536;

while(number <= end) {
    console.log(number);
    number = number * 2;
}

// An ice cream seller can't go home until she sells all of her cones.
// Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell.
// Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.

// allCones represents the entire inventory
var allCones = Math.floor(Math.random() * 50) + 50;
// order will hold a random number of cone orders each time through the loop
var order;
console.log("Welcome to the icecream stand");
console.log("I start my day with " + allCones + " cones.");
do {
    order = Math.floor(Math.random() * 5) + 1;
    if(order <= allCones) {
        allCones = allCones - order;
        console.log("Sold " + order + " cones.");
    } else {
        console.log("Cannot sell you " + order + " cones. I only have " + allCones);
        console.log("Next customer, please!");
    }

} while(allCones > 0);

console.log("I sold all the ice cream cones and get to go home!");


