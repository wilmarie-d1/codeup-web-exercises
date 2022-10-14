//while loop example
// let i = 10;
// while(i < 10){
//     console.log(i);
//     i++;
// }
// console.log("Broken out of loop");

//do while example
// do {
// console.log(i);
// i++;
// console.log(i);
// }while(i > -1) - being stuck in infinite recursion

// do{
//     console.log(i);
//     i++;
//     console.log(i);
// }while(i < 10)
//
// Create a variable called num that is equal to 0.
// Write a while loop that increments "num" by 5 so long as num is less than 100. Do the same thing with a do-while.
// mini exercise:

// let num = 0;
// while (num < 100){
//     console.log(num)
//     num +=5
// }

//for loop ex:
for(let i=0; i < 10; i++){
    console.log(i);
}
// console.log("Broken out of for loop");
// for loop starts
// for(initialization; condition; increment)

// for(let num = 0; num < 100; num +=5){
//     console.log(num);
// }

//breaks and continues
// for (let i =0; i < 100; i+= 5){
//     console.log(i);
//     break;

// for (let i = 0; i < 100; i+= 5){
//     console.log(i);
//     if( i === 50) {
//         break;
//     }
// }

for(let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
        console.log(i + " is an even number");
        continue;
    }
    console.log(i);
}