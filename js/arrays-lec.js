// // "use strict"
//
// [1,2,3,4,5,6]
// [""]
// let names = ["john", "jim", "will", "james", "paul"];
//
// let arr = [true, 1, "hello", hello];
// console.log(arr);
// console.log(arr.length);
// let str = arr.toString()
// let str1 = arr.join();
// console.log(str);
// console.log(typeof str);
// console.log(names[2]);
// console.log(names[0])
// console.log(names.length);
// console.log(names.lastIndexOf("will"));
// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(newArr);
//
// for (let i = 0; i < newArr.length; i++){
//     console.log(names[i]);
// }
// let lastIndex = names.length -1;
//
// for (let i = lastIndex; i >= 0; i--){
//     console.log(names[i]);
// }
//
//
// names.forEach(function(names) {
//
//     console.log("Here are popular names " + names);
// })
//
//
//
//
//
// if (true) {
//     let x = 5;
// }
// console.log(typeof x);

// const sayHello = (name) => `Hello, ${name}!`
// const sayHello = name => { 'Hello, ' + name + '!' }
// const sayHello = (name) => { 'Hello, ' + name + '!' }
// console.log(sayHello())
// let numbers = [1, 2, 3, 4, 5];
// numbers.map(n => n * 3)
// console.log(numbers)
const isDivisibleBy3 = n => n % 3 === 0;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(isDivisibleBy3));
console.log(numbers);