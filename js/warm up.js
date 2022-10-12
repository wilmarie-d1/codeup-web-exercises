"use strict"

 let userInput = prompt("Insert number");
function warmUp (inputNum) {
    if (typeof inputNum !== "number"){
        console.log("This is not a number");
        return 0;

    } else {
        return inputNum * 5;
    }
}
console.log(warmUp(6) );
