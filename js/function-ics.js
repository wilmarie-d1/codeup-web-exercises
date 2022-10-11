"use strict";// ================ !! Mini-exercises !!

// Write a function, returnFive, that returns the number five. No inputs should be defined.

function returnFive() {
    return 5;
}
console.log(returnFive());
// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.

function isFive (number) {
    return number === 5 || number ==="5";

}

console.log(isFive(5));
console.log(isFive("5.5"));
console.log(isFive("5"));

// how many inputs should the function have? 1
// what are the data types for the inputs? number or strong
// what is the data type of the output/return value? boolean


// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
//const isShortWord = (string) => string.length < 5
function isShortWord(word)  {
    return word.length < 5;
}
console.log(isShortWord('four'));


// how many inputs? 1
// what data type for inputs? string
// what is the return type? boolean


// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
function isSameLength (word, road) {
    return word.length === road.length;

}
console.log(isSameLength("wash","wash"));

// How many inputs? 2
// What type of input? string, string
// What type of output? boolean