'use strict'
(function(){


//Create two variables one for password and one for username.
//Create two more variables named userUsername and userPassword and prompt the user to enter in their credentials.
//Create an if statement and log to the console if the user enters in the correct information.

let username = "wdel1601";
let password = "drmiami501";
let userUsername = prompt("Enter your username");
let userPassword = prompt("Enter your password");

if (!(username === userUsername && password === userPassword)) {
    console.log("Please try again!");
} else {
    console.log(("Welcome back!"));
}
    // IF ELSE/ELSE IF/ELSE
    //         if(condition) {
    //     if condition evaluated to true, run this code
    //        }else if(condition2) {
    // if the second condition is met, run this code
    //
    //         }else {
    //     if no condition is met, run this code.
    //Teacher is dismissing students by clothes they are wearing.
    let shoes = 'red', shirt = 'hawaiian', jeans = 'denim', jacket = true;
    if(shoes === 'red') {
    console.log("If you\'re wearing red shoes, you are dismissed.");
} else if(shirt === "hawaiian") {
    console.log("If you're wearing a hawaiian shirt,  you are dismissed");
} else if(pants === "plaid") {
    console.log("If you are wearing plaid pants, you are dismissed.");
} else if(jacket){
    console.log("If you're wearing a jacket, you're dismissed.");
} else {
    (console.log("Everyone else is dismissed!"));
}

//TERNARY OPERATOR

    let myName = "Codeup";

    myName === "Codeup" ? console.log("Hello, " + myName) : console.log("Hello stranger!");

    //SWITCH STATEMENTS
    let menu = prompt("1. cheeseburger \n 2.chicken sandwich \n 3.chili cheese fries \n 4.philly cheesesteak");
    switch(menu) {
        case "1":
            alert("The cheeseburger cost $5.99");
            break;
        case "2":
            alert("The chicken sandwich comes with pickles and is $4.99");
            break;
        case"3":
            alert("The chili cheese fries are $2.99");
            break;
        case"4":
            alert("The philly cheesesteak has mustrooms and is $7.99");
            break;
        default:
            alert("Sorry, that item is not on the menu!");
    }
        )})









