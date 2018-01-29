"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return "Hello, " + name + "!";
}

console.log(sayHello("Bob"));
console.log(sayHello("Jane"));
console.log(sayHello("Codeup"));
console.log(sayHello());

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage = sayHello("Ryan");
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = "Ryan";
console.log(sayHello(myName));


function randomNumberUnder(number) {
    return Math.ceil(Math.random() * number);
}

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);
var random =randomNumberUnder(3);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(number) {
    return number == 2;
}

var result = isTwo(random);
var random1 = randomNumberUnder(5);
var random2 = randomNumberUnder(3);

console.log("It is: " + result + " that " + random + " is the number two.");
console.log("It is: " + isTwo(random1) + " that " + random1 + " is the number two.");
console.log("It is: " + isTwo(random2) + " that " + random2 + " is the number two.");



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercentage, bill) {
    if(tipPercentage < 1) {
        return tipPercentage * bill;
    } else {
        return (tipPercentage / 100) * bill;
    }
}

console.log(calculateTip(.2, 20));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
var tipPercentage = parseFloat(prompt("Please input a tip percentage as a decimal: example .2 means 20%"));
var bill = parseFloat(prompt("How much was your lunch?"));
var tipAmount = calculateTip(tipPercentage, bill);
var finalTotal = tipAmount + bill;
console.log(finalTotal + " is the total for a " + bill + " bill with a " + tipPercentage + " tip.");

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(price, discountPercent) {
    var discountAmount = price * discountPercent;
    var finalTotal = price - discountAmount;
    return finalTotal;
}

var price = 10;
var discountPercent = .15;
var finalPrice = applyDiscount(price, discountPercent);
console.log(finalPrice + " is the final price after applying the " + discountPercent + " discount to " + price );