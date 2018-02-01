"use strict";

// ============================= Adding and Removing Elements

/*

    // The following array methods change the original array value!

    someArray.shift()   = removes first element
    someArray.unshift() = adds new first element
    someArray.pop()     = removes last element
    someArray.push()    = adds new last element

 */


// declare and initialize testing array

    var pies = ["apple", "cherry", "key lime", "key lime", "huckleberry", "rhubarb"];


// shift / unshift - dealing with the first element

    // console.log(pies);
    // pies.shift();
    // console.log(pies);
    //
    // var firstElement = pies.shift();
    // console.log("The first element is: " + firstElement);
    // console.log(pies);
    //
    // var newLengthOfArray = pies.unshift(firstElement);
    // console.log("Test is " + newLengthOfArray);
    // console.log(pies);


// pop / push - dealing with the last element

    // var pies = ["apple", "cherry", "key lime", "huckleberry", "rhubarb"];

    // var lastElement = pies.pop();

    // pies.forEach(function(element){
    //     console.log(element);
    // });

    // pies.push(lastElement);

    // console.log(pies);


// ============================= Locating Elements

    // var indexOfKeyLime = pies.indexOf('lemon');
    // console.log(indexOfKeyLime);



// ============================= Slicing

/* SYNTAX

   someArray.slice(startingIndex, startingIndexNotIncluded);

   // one argument only will return a copy from the starting index to the end of the array

 */

    // console.log(pies);
    //
    // var fromKeyLime = pies.slice(pies.indexOf("key lime") + 1);
    //
    // console.log(fromKeyLime);
    //
    // console.log(pies);



// ============================= Sorting

    // console.log(pies);
    // pies.sort();
    // console.log(pies);


// ============================= Reversing

    // console.log(pies);
    // pies.reverse();
    // pies.reverse();
    // console.log(pies);

    // console.log(pies.reverse()[0]);


// ============================= Split / Join


// splitting string into and array

    var bondsString = "Connery,Lazenby,Moore,Dalton,Brosnan,Craig";
    var bondsArray = bondsString.split(","); // comma and space = delimiter
    //
    console.log(bondsArray);



// splitting on an empty string

    // var everyCharacter = bondsString.split("");
    // console.log(everyCharacter);

// joining array into a string

    var bondsArray = ["Connery", "Lazenby", "Moore", "Dalton", "Brosnan", "Craig"];
    var bondsString = bondsArray.join("");



    // var output = "";
    // for (var i = 0; i < bondsArray.length; i += 1) {
    //     output += bondsArray[i];
    //     output += ", ";
    // }

    console.log(bondsString);


















// ============================= (EXTRA INFO) Splicing Elements

/*

    someArray.splice(param1, param2, param3...);

    param1 = which index to start from
    param2 = how many elements to remove
    param3 = from this parameter and onward, arguments passed in will be added as new elements at the end of the array

 */


// create new test array
    var bonds = ["Craig", "Brosnan", "Dalton", "Moore", "Connery"];


// removing elements splice
//     var missingBonds = bonds.splice(bonds.indexOf("Moore"), 2);
//     console.log(bonds);
//     console.log(missingBonds);
//

// adding elements with splice
//     bonds.splice(1, 0, "Lazenby");
//     console.log(bonds);
//

// replace elements
//     bonds.splice(bonds.indexOf("Craig"), 1, "Elba");
//     console.log(bonds);
