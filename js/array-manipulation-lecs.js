// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// nums.push(11, 12, 13);
// console.log(nums);
// nums.unshift(-2, 0, -1);
// console.log(nums);

let nameArr = ["jim", "joe", "jim", "john", "jim", "bob"];
console.log(nameArr.indexOf("john"));
console.log(nameArr.indexOf("jim"));
console.log(nameArr.lastIndexOf("jim"));

//first arg will dictate that you remove everything before that index
//second arg dictates that you remove everything past that index and that index itself
//use negative numbers to go back
// console.log(nameArr.slice(2, 4));


//console.log(nameArr.reverse());
//
// nameArr.sort();
// console.log(nameArr);

let  nameString = "jim, joe, jim, john, jim, bob";
// console.log(nameString.split(",", 2));
console.log(nameArr.join('; '));