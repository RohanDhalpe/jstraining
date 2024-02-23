//2. What makes a method mutating or non mutating in Javascript? 
//   Find out whether each of the following methods are mutating or non-mutating. How can you verify this?:


// Mutating methods : Mutating methods are those that directly modify the original data structure.
// Non-mutating methods :Non-mutating methods do not modify the original data structure they are called on.
//                       Instead, they return a new data structure with modifications.

// 1) Push - Mutating
  
let arr1 = [2,4,6,8,10,12];
arr1.push(14);
console.log(arr1)

//  2) Pop - Mutating

let arr2 = [2,4,6,8,10,12];
arr2.pop();
console.log(arr2)

//  3) Filter - Non-mutating

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//  4) Find - Non-mutating

const nums = [1, 2, 3, 4, 5];
const foundNumber = nums.find(num => num > 3);
console.log(foundNumber); // Output: 4

//  5) Sort - Mutating

const sampArray = [1,10,7,6,5]
sampArray.sort();
console.log(sampArray)
