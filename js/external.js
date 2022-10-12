let Greeting = "Hello from external JavaScript!";
console.log(Greeting);
alert("Welcome to my Website!")
//Fav color inquiry
let userInput = prompt("What is your favorite color?");
console.log(userInput);
alert('Sweet! ' + userInput + ' is my favorite color too!');
//Fav Movie
alert("Let's rent some movies! They are $3 per day for each movie.");
let TheLittleMermaid = prompt("How many days do you want to rent TheLittleMermaid?");
let BrotherBear = prompt("How many days do you want to rent BrotherBear?");
let Hercules = prompt("How many days do you want to rent Hercules?");
let perDay = 3;
let Total = (parseFloat(TheLittleMermaid) + parseFloat(BrotherBear) + parseFloat(Hercules)) * (perDay);
console.log(Total);
let  movieSum = alert("Your total is $ " + Total + "!");
console.log(movieSum);

alert("Let's talk about the work week!");
let googleHours = prompt("How many hours did you work at Google?");
let googlePay = prompt("How much does Google pay you per hour?");
let amazonHours = prompt("How many hours did you work for Amazon?");
let amazonPay =prompt("How much does Amazon pay you per hour?");
let facebookHours = prompt ("How many hours did you work at Facebook this week?");
let facebookPay = prompt("How much does Facebook pay you per hour?");
let totalHours = ((parseFloat(googleHours) * googlePay) + (parseFloat(amazonHours) * amazonPay) + (parseFloat(facebookHours) * facebookPay));
alert("Your total for the week is $" + totalHours + "!");

alert("Now let's talk about enrolling in that class.");
let isFull = confirm('Is the class full?');
let hasConflict = confirm("Do you have a conflict with your schedule?");
alert(!isFull && !hasConflict);

let itemsBought = prompt("How many items did you buy?");
let offer = confirm("Has the offer expired?");
let Premium = confirm("Are you a premium member?");
let Decision = alert(parseFloat(itemsBought) > 2 || Premium) && !offer)
console.log(Decision);
