/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
//  */
// function analyzeColor(colorString) {
//     if (colorString === "blue") {
//         return "The color of the sky";
//     } else if (colorString === "pink") {
//     return "My favorite color!";
//
//     } else if (colorString === "red") {
//         return "The color of passion";
//     } else if (colorString === "orange") {
//        return "The best color of the fall!";
//     }
// }
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
//         let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//         let randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 *function analyzeColor(stringColor) {
 *     stringColor = ("blue","red","pink","orange","blue");
 *     if(f)
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//     console.log(analyzeColor(randomColor));
// // /**
// //  *
// //  * TODO:
// //  * Comment out the code above, and refactor your function to use a switch-case statement
// //  */
//     function analyzeColor(color) {
//         switch (color) {
//             case "rose":
//                 return "How you should see the world colored";
//             case "red":
//                 return "The most beautiful colored roses";
//             case "blue":
//                 return "The color where the sky and the ocean meet";
//             case "violet":
//                 return "Imagine walking through a field of them";
//             default:
//                 return "Sorry color is not on the list";
//         }
//     }
//     console.log(analyzeColor());


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// alert(analyzeColor(prompt("Choose a color!")));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNum, totalBill) {
//     if (luckyNum === 0) {
//         return (totalBill);
//     } else if (luckyNum === 1) {
//         return (totalBill - (totalBill * .1));
//     } else if (luckyNum === 2) {
//         return (totalBill - (totalBill * .25));
//     } else if (luckyNum === 3) {
//         return (totalBill - (totalBill * .35));
//     } else if (luckyNum === 4) {
//         return (totalBill - (totalBill * .5));
//     } else if (luckyNum === 5) {
//         return 0;
//     }}
//     console.log(calculateTotal(3, 100));
//     console.log(calculateTotal(5, 100));
//     console.log(calculateTotal(2, 100));

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 5.
     * (In this line of code, 0 is inclusive, and 6 is exclusive)
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
//     let luckyNumber = Math.floor(Math.random() * 6);
//     let totalAmt =prompt("What is your total?");
//     alert(parseInt(luckyNumber) + " is your lucky number!");
//     alert(totalAmt + " is your price before the discount!");
//     alert(calculateTotal(luckyNumber, totalAmt) + " is your discounted price.");
//     /**
//      * TODO:
//      * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//      * would like to enter a number. If they click 'Ok', prompt the user for a
//      * number, then use 3 separate alerts to tell the user:
//      *
//      * - whether the number is even or odd
//      * - what the number plus 100 is
//      * - if the number is negative or positive
//      *
//      * Do *NOT* display any of the above information
//      * if the user enters a value that is not of the number data type.
//      * Instead, use an alert to inform them of the incorrect input data type.
//      *
//      *
//      * Can you refactor your code to use functions?
//      * HINT: The way we prompt for a value could be improved
//      */
    let numbCon = confirm("Do you want to enter a number?");
console.log(confirm);
function playaGame () {
    if(numbCon) {
        let chosenInput = parseFloat(prompt("Please enter a number."));
        if (chosenInput % 2 === 1 || chosenInput % 2 === 0) {

            if (chosenInput % 2 === 0) {
                alert("Number is even.");
            } else {
                alert("The number is odd.");
                // alert(chosenInput % === 0 ? "Number is even." : "Number is positive");
            }
            alert((chosenInput + 100) + " is your number plus 100.")

            if (chosenInput > 0) {
                alert("Number is positive.")
            } else {
                alert("Number is negative.")
            }
        } else if (chosenInput !== Number) {
            alert("This is not a number.");
        }
    }};
playaGame();