"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

function isNumeric(input) {
    if(isNaN(parseFloat(input))) {
        return false;
    } else {
        return true;
    }
}
var wantsToEnterNumber = confirm("Would you like to enter a number?");
if(wantsToEnterNumber) {
    var number = prompt("Please enter a number!");
    number = parseFloat(number);

    // checks if the input ain't a number
    if(!isNumeric(number)) {
        alert("Gotta input a number!");
    } else {

        if(number % 2 == 0) {
            alert(number + " is even");
        } else {
            alert(number + " is odd");
        }

        alert(number + " plus 100 is: " + (100 + number));

        if(number < 0) {
            alert(number + " is negative!");
        } else if(number > 0) {
            alert(number + " is positive");
        } else {
            alert(number + " is neither positive or negative");
        }
    }

}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(input) {
//     var message;
//
//     if(input === "blue") {
//         message = "Blue is the color of the sky!";
//     } else if(input === "red") {
//         message = "Roses are red";
//     } else if(input === "orange") {
//         message = "Orange you glad I didn't say banana";
//     } else if(input === "yellow") {
//         message = "Yellow is the color of your cup when you're on the exercise";
//     } else if(input === "green") {
//         message = "grass is green";
//     } else if (input === "indigo") {
//         message = "indigo is the color of blue-jeans";
//     } else if (input === "violet") {
//         message = "violets are violet";
//     } else {
//         message = "I don't know anything about the color " + input;
//     }
//
//     return message;
// }

console.log(analyzeColor("red"));
console.log(analyzeColor("violet"));
console.log(analyzeColor("papayawhip"));
console.log(analyzeColor("salmon"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(input) {
    var message;

    switch(input) {
        case "red":
            message = "Roses are red";
            break;
        case "orange":
            message = "Orange you glad I didn't say banana";
            break;
        case "yellow":
            message = "Gold is yellow, sorta";
            break;
        case "green":
            message = "Grass is green";
            break;
        case "blue":
            message = "Blue is the color of the sky.";
            break;
        case "violet":
            message = "Violets are violet";
            break;
        case "indigo":
            message = "Jeans are indigo";
            break;
        default:
            message = "I don't know anything about the color " + input;
            break;
    }

    return message;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// console.log(analyzeColor(prompt("Please tell us your favorite color")));
var userColorChoice = prompt("Please share your favorite color!");
var result = analyzeColor(userColorChoice);
console.log(result);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, total) {

    if(luckyNumber == 0) {
        return total;
    } else if(luckyNumber == 1) {
        return total - (total * .1)
    } else if(luckyNumber == 2) {
        return total - (total * .25);
    } else if(luckyNumber == 3) {
        return total - (total * .35);
    } else if(luckyNumber == 4) {
        return total - total * .5;
    } else if(luckyNumber == 5) {
        return total - total * 1;
    } else {
        return total;
    }
}

console.log(calculateTotal(1, 500));
console.log(calculateTotal(2, 200));
console.log(calculateTotal(3, 300));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 1000));
console.log(calculateTotal(40, 1200));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var total = prompt("How much was the total amount spent?");
alert("Your lucky number is " + luckyNumber);
alert("Price before the discount is " + total);
alert("after the discount, your total is " + calculateTotal(luckyNumber, total));

// Bonus 1.
// Write a function (or multiple functions) that will return
// a boolean depending on if the string value passed to it
// as an argument is the name of a day of the week that starts with a T.
//     Otherwise, it should return false.
//     Example: dayOfTheWeekStartsWithT("Monday")     => returns false
// Example: dayOfTheWeekStartsWithT("Tuesday")     => returns true
// Example: dayOfTheWeekStartsWithT("Tommy")     => returns false
function dayOfTheWeekStartsWithT(input) {
    input = input.toLowerCase();

    if(input === "tuesday" || input === "thursday") {
        return true;
    } else {
        return false;
    }
}
console.log(dayOfTheWeekStartsWithT("Texas"));
console.log(dayOfTheWeekStartsWithT("tomorrow"));
console.log(dayOfTheWeekStartsWithT("TUESDAY"));
console.log(dayOfTheWeekStartsWithT("Friday"));

function dayOfTheWeekStartsWithT(input) {
    input = input.toLowerCase();
    return input == "tuesday" || input == "thursday";
}

// Bonus 2.
// Write a function, isValidPassword, that takes in a string argument and returns true or false
// depending on whether or not all the following conditions are true:
// 1) Must be 6 characters long (only for the sake of this exercise, NOT a best practice)
// 2) Contains at least one letter and one number
// 3) Contains at least one upper and one lower case letter
// 4) Only comprised of letters and numbers
// 5) EXTRA BONUS: is not the same forwards and backwards
function isValidPassword(input) {
    var lengthIsGood = input.length == 6;
    var hasAtLeastOneLetter = hasLetter(input);
    var hasAtLeastOneNumber = hasNumber(input);
    var hasLowerCaseLetter;
    var hasUpperCaseLetter;
    var alphaNumeric;

    return lengthIsGood && hasAtLeastOneLetter && hasAtLeastOneNumber && hasLowerCaseLetter && hasUpperCaseLetter && alphaNumeric;
}

function hasLetter(input) {
    input = input.toLowerCase();

    return input.includes("a") || input.includes("b") || input.includes("c") ||
        input.includes("d") || input.includes("e") || input.includes("f") ||
        input.includes("g") || input.includes("h");
}

function hasNumber(input) {
    input = input.toLowerCase();

    return input.includes(0) || input.includes(1) || input.includes(2) ||
        input.includes(3) || input.includes(4) || input.includes(5) ||
        input.includes(6) || input.includes(7) || input.includes(8) ||
        input.includes(9) || input.includes(0);
}
