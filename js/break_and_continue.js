"use strict"
function addNumberDisplay () {
let i = 0;
let userInput = parseFloat(prompt("Enter an odd number between one and fifty"));

if(userInput % 2 !== 0 && userInput < 50 && userInput > 1){

    console.log("Number to skip is " + userInput)
}

for(let i = 1; i <= 50; i++) {

    if (userInput % 2 === 0 || userInput > 50 || userInput< 1) {
        addNumberDisplay();
        break;
    }
        if (userInput === i) {
            console.log("Yikes! Skipping number: " + userInput)
            continue;
}
            if (i % 2 !== 0) {
                console.log(i + " is an odd number" );
    }}}
addNumberDisplay();






