"use strict";

// let car = new Object();
// let cup = new Object();

/////object literal notation///////
//let car = {};
//console.log(typeof car);

// let book = {};
// book.title = "Berserk";
// book.author = "Kentaro Miura"
// book.title = "Berserk Deluxe vol. 4";
// book["volume"] = 4;
// book["volumes"] = [4, 5, 6];
// console.log(book);
// let publishedWorks = {
//     bookTitles: ["Berserk", "Vagabond", "Their Eyes"]
//
// };
// let authorObj = {
//     name: "Kentaro Miura",
//     works: publishedWorks
// };
//
// let bookTitle = prompt("Enter book title");
// let book = {
//     title: bookTitle,
//     author: authorObj,
//     volume: 4,
// };
// console.log(book);
// console.log(book.author.works.bookTitles);
//


// var cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];
//
// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");
//
// console.log("Here are all the features of all the cars:");
// cars.forEach(function(car) {
//     car.features.forEach(function(feature) {
//         console.log(feature);
//     });
// });

"use strict";

var car = {};
car.make = "Toyota";
car.model = "Camry";

// create a honk method on the car object
car.honk = function () {
    alert("Honk! Honk!");
};

// honk the horn
car.honk();








