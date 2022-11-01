"use strict"
//Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array.

// let fruits = ["apple", "banana", "orange", "apple", "pineapple"];
//
// function allIndexesOf (biggie, bag) {
//     if (biggie === [] && bag === []){
//         return []
// }
//

function tellFortune(kids, babyMomma, location, work) {
    return "You will be in " + location + " married to " + babyMomma + " with " + kids + " kids " + "as a" + work;
}
console.log(tellFortune("4","Angela","Sydney, Australia", "as a stripper"))
console.log(tellFortune("10", "Maria", "Barcelona", "professional crackhead by trade"));

function calculateDogAge(years) {
    return "Your dog is " + (parseFloat(years) * 7) + " years old in dog years!"
}

console.log(calculateDogAge(3));
console.log(calculateDogAge(7));
console.log(calculateDogAge(10));

function calculateSupply(age, dailyAmt){
    let maxAge = 70;
    let totalNeeded = (dailyAmt * 365) * (maxAge - age);
    let message = "You will need " + totalNeeded + " cups of tea to last you until you're " + maxAge ;
    return (message);
}
console.log(calculateSupply(24,3));
console.log(calculateSupply(35, 40));

function calcCircumfrence(radius) {
    let circumference = Math.PI * 2*radius;
        console.log("The circumference is " + circumference);
        let area = Math.PI * radius*radius;
        console.log("The area is " + area);
    }
calcCircumfrence(5);
calcCircumfrence(10);
calcCircumfrence(200);