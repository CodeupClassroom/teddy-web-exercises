"use strict";

// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

function showMultiplicationTable(number) {
    for(var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for(var i = 1; i <= 9; i++) {
    i = i.toString();
    console.log(i.repeat(i));
}

for(var i = 1; i <= 9; i++) {
    var output = "";
    for(var j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output);
}

// generate 10 random numbers between 20 and 200
// output to the console whether each number is odd or even. For example:
// 123 is odd
// 80 is even
var number;
var min = 20;
var max = 200;
for(var i = 1; i <= 10; i++) {
    number = Math.floor(Math.random() * (max - min)) + min;
    if(number % 2 === 0) {
        console.log(number + " is even.");
    } else {
        console.log(number + " is odd.");
    }
}

for(var i = 100; i >= 5; i -= 5) {
    console.log(i);
}


