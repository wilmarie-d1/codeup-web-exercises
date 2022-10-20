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
// //
//         let arr = [true, "Icon", 25, "66", false, 0];
//
//
// function typePrinter (userArr) {
//
//     for(let i = 0; i < userArr.length;i++) {
//
//     console.log(typeof userArr[i]);
//     }
// }
// typePrinter(arr);

//Warm-Up:
//
// Create a function named "average" that takes in an array of numeric values, and returns the average. If any of the elements in the array are non-numeric, the function should return false.
//
// Ex:
// average(["6", 5, 3, 2, 9])                       // returns 5
// average([true, 6, 9, 3, 10])                     // returns false
// average([{name: "Codey the Duck}, 10, 3, false]) // returns false
// average([1, 2, 3, 4, 5])                         // returns 3
// average(["5.5", "five", 3, 6, 7])                // returns false


let lineUp = [1, 2, 3, 4, 5, 6]
let aSign = [1, 1, 1, 2, 2, 2, 3, 3, 3]
let notASign = ["one", 2, 3, "four"]
let BibleThings = ["David", "Goliath", "Lamb", 12]
let lessofASign = ["four", "three", "two", "one"]

function isNumeric (input){
    return !isNaN(parseFloat(input));
}
function average (basic) {
    let i = 0;
    let tots = 0;
    while (i < basic.length) {
        if (isNumeric(basic[i])) {
            tots += parseFloat(basic[i]);
            i++;
        return tots / basic.length;
    }else {
        return false;
    }
}}
console.log(average(lineUp));
console.log(average(aSign));
console.log(average(notASign));
console.log(average(BibleThings));
console.log(average(lessofASign))