"use strict";



// ======================= IF STATEMENTS

/*

     if (condition) {
        action; // only runs if condition true
     }

*/
//
// if (true) {
//     console.log("3 is greater than one");
// }



/*
 * Possible conditions...
 * (true)
 * (false)
 * (true && !false)
 * (2)
 * (0)
 * (isAdmin)
 * (checkIsAdmin())
 */



// is this a comparison???
// var x = 3;
//
// if (x = 10) {
//     console.log("I always run!!!");
// }


// ======================= IF STATEMENT WITH ELSE

/*

     if (condition) {
         action; // runs if condition true
     } else {
         action; // runs if condition false
     }

*/

// var x = 10;
//
// if (x === 10) {
//     console.log("x is 10");
// } else {
//     console.log("x is not 10");
// }






// ======================= IF STATEMENTS WITH ELSE IF

/*

    if (condition1) {
        action; // runs if condition true
    } else if (condition2) {
        action; // runs if condition 1 is false and condition 2 is true
    } else {
        action; // runs if condition 1 and condition 2 are false
    }

*/

// var x = 9;
//
// if (x === 8) {
//     console.log("x is 8");
// } else if (x === 9) {
//     console.log("x is 9");
// } else {
//     console.log("x is not 8 or 9");
// }







// ======================= TERNARY OPERATORS

// use when only one condition is being evaluated and may be only true or false

/*

     var someVar = (condition) ? returnValueIfTrue : returnValueIfFalse;

*/


// var message;
// var success = isAdmin() && isLoggedIn();

// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }

// the above if/else can be re-written as:
// var message = (success) ? "Operation was successful." : "Oops, something went wrong.";







// var someNumber = 9;
//
// var divisibleByFiveMessage = (someNumber % 5 === 0) ? "Evenly divisible by 5" : "Not evenly divisible by 5";
//
// console.log(divisibleByFiveMessage);


// function returnLoginStatus(arg1, arg2) {
//
//     var loginStatus;
//
//     if (userLoggedIn()) {
//         loginStatus = "user is logged in";
//     } else {
//         loginStatus = "user is not logged in";
//     }
//
//     // var loginStatus = (userLoggedIn()) ? "user is logged in" : "user is not logged in";
//     // var loginStatus = (userLoggedIn()) ? "user is logged in" : "user is not logged in";
//
//     return loginStatus;
// }







// ======================= SWITCH STATEMENTS

// use a switch statement if a single condition may have multiple possible values

/*

    switch(expectedValue) {

        case someOutput1:
            ...do something;
            break;
        case someOutput2:
            ...do something;
            break;
        (can continue to add cases)
        default:
            this will happen if no other case values match the switch condition value;

    }

*/


// switch (returnStateOfUser()) {
//     case "Texas":
//         console.log("Howdy partner!");
//         break;
//     case "Alaska":
//         console.log("Brrrr!!! Cold.");
//         break;
// }
//
// if (returnStateOfUser() === "Texas") {
//     console.log("Howdy partner!");
// } else if (returnStateOfUser() === "Alaska") {
//     console.log("Brrrr!!! Cold.");
// }













var bondFilm = "Goldfinger";

// if (bondFilm === "Dr. No") {
//     console.log("Fantastic!");
// } else if (bondFilm === "From Russia With Love") {
//     console.log("Exploding barrels!");
// } else if (bondFilm === "Goldfinger") {
//     console.log("\"I expect you to die, Mr. Bond.\"");
// } else if (bondFilm === "Thunderball") {
//     console.log("Kinda long.");
// } else if (bondFilm === "You Only Live Twice") {
//     console.log("One of the better theme songs.");
// } else {
//     console.log("That's not one of the first five Bond films.");
// }

// refactor


switch (bondFilm) {
    case "Dr. No":
        console.log("Fantastic!");
        break;
    case "From Russia With Love":
        console.log("Exploding barrels!");
        break;
    case "Goldfinger":
        console.log("\"I expect you to die, Mr. Bond.\"");
        break;
    case "Thunderball":
        console.log("Kinda long.");
        break;
    case "You Only Live Twice":
        console.log("One of the better theme songs.");
        break;
    default:
        console.log("That's not one of the first five Bond films.");
}

