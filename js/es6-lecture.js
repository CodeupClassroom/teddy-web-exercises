"use strict";

// exponentiation

    // var x = 6**2;
    // console.log(x);


// let and const

    // {
    //     var x = 3;
    // }
    //
    // console.log(x);

    // {
    //     let a = 10;
    //     a += 5;
    //     console.log(a);
    // }
    //
    // {
    //     const b = 20;
    // }


// template strings

    // let firstName = "Ron";
    // let lastName = "Swanson";
    //
    // let quote = "";
    // quote += '"You had me at \'meat tornado\'" - ';
    // quote += firstName + " " + lastName;

    // console.log(quote);

    // let easierQuote = `"You had me at 'meat tornado'" - ${firstName} ${lastName}`;

    // var multiLine = "One line\nTwo Line\nThree Line";

    // console.log(multiLine);

//     let multipleLines = `
// One line
// Two line
// Three line
//     `;
//
//     console.log(multipleLines);


// for ..of loop (works on node lists!!!)

    // const arr = ["one", "two", "three"];
    //
    // for (let ele of arr) {
    //     console.log(ele);
    // }





// arrow functions


    // original

    // // function declaration
        // function subOneA(num) {
        //     return num - 1;
        // }

    // // function expression
        // var addOneA = function(num) {
        //     return num + 1;
        // };

    // // added arrow
        // let addOneB = (num) => {
        //     return num + 1;
        // };

    // removed curly braces (if only one statement)
        // let addOneC = (num) => num + 1;


    // removed parens if one input only
        // let addOneD = num => num + 1;

    //     console.log(addOneA(2));
    //     console.log(addOneB(2));
    //     console.log(addOneC(2));
    //     console.log(addOneD(2));


// default parameter values


    // function returnInput(input) {
    //     return input;
    // }
    //
    // console.log(returnInput());
    //
    //
    // let addArgsA = (num1, num2) => {
    //     if (num1 === undefined) {
    //         num1 = 2;
    //     }
    //     if (num2 === undefined) {
    //         num2 = 2;
    //     }
    //     return num1 + num2;
    // };
    //
    // let addArgsB = (num1, num2) => {
    //     num1 = num1 || 2;
    //     num2 = num2 || 2;
    //     return num1 + num2;
    // };
    //
    // let addArgsC = (num1 = 2, num2 = 2) => {
    //     return num1 + num2;
    // };

    // console.log("\nA output...");
    // console.log(addArgsA());
    // console.log(addArgsA(1));
    // console.log(addArgsA(3, 3));
    //
    // console.log("\nB output...");
    // console.log(addArgsB());
    // console.log(addArgsB(1));
    // console.log(addArgsB(3, 3));
    //
    // console.log("\nC output...");
    // console.log(addArgsC());
    // console.log(addArgsC(1));
    // console.log(addArgsC(3, 3));


// object property variable assignment shorthand

    // let breed = "Pug";
    // let age = 3;
    // let name = "Lexie";
    // let isCute = true;
    //
    //
    // let dog = {
    //     breed,
    //     age,
    //     name,
    //     isCute
    // };
    //
    // console.log(dog.name);


// object destructuring

    // let puppy = {
    //     breed: "Lab",
    //     age: 10,
    //     name: "Sabrina",
    //     isCute: true
    // };

    // let breed = puppy.breed;
    // let age = puppy.age;
    // let name = puppy.name;
    // let isCute = puppy.isCute;

    // let { breed, age, name, isCute } = puppy;
    //
    // console.log(breed);
    // console.log(age);
    // console.log(name);
    // console.log(isCute);


// with arrays

    // let cats = ["CJ", "Claude", "Max"];
    //
    // let [cat1, cat2] = cats;
    //
    // console.log(cat1);
    // console.log(cat2);



// using with functions

    // const getArea = ({ height, width }) => {
    //     console.log(`The height is: ${height}`);
    //     console.log(`The width is: ${width}`);
    // };

    // let shape = {
    //     height: 20,
    //     width: 10
    // };
    //
    // console.log(getArea(shape));
    //

    // or

        // let height = 20;
        // let width = 10;
        //
        // console.log(getArea({ height, width }));




