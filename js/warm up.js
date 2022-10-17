"use strict"

//  let userInput = prompt("Insert number");
// function warmUp (inputNum) {
//     if (typeof inputNum !== "number"){
//         console.log("This is not a number");
//         return 0;
//
//     } else {
//         return inputNum * 5;
//     }
// }
// console.log(warmUp(6) );
//
//
//
//
//
// // Write a function named "inBetween" that accepts three inputs: min, max, num, and returns a boolean determining whether or not the "num" parameter is in between the min and max numbers.
// //
// //     EX:
// // inBetween(1, 10, 5) returns true
// // inBetween(25, 26, 25) returns false
// // inBetween(0, 1, 0.5) returns true
//
// "use strict"
//
// function inBetween (min, max, num) {
//     // let boolean;
//     if (min < num && num < max) {
//         //  boolean = true;
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(inBetween(5,10,7));
// console.log(inBetween(45,60,37));
// console.log(inBetween(45,100,76));
//
// //Create a function named "typePrinter" that accepts an array as an input, and logs the data type of each element to the console.
//
        let arr = [true, "Icon", 25, "66", false, 0];


function typePrinter (userArr) {

    for(let i = 0; i < userArr.length;i++) {

    console.log(typeof userArr[i]);
    }
}
typePrinter(arr);




