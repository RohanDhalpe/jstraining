// 2] Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. 
//    What do you expect to happen in both cases? What actually happens in both cases. 
//    What is the difference between an object declared as a let or a const variable?

let myArr = [5,10,15]
console.log(myArr)

myArr[0] = 4
console.log(myArr)

delete myArr[0]
console.log(myArr)

let myObj = {name:"rohan",age:10 }
console.log(myObj)

myObj.age = 15
console.log(myObj)

delete myObj.age
console.log(myObj)

//===============================================================//

// Create an array using const
const myConstArray = [1, 2, 3];

// Create an object using const
const myConstObject = { name: "Rohan", age: 22 };

// Modifying properties in arrays
myConstArray[0] = 10;
// myConstArray[0] = 10; // This would throw an error because myConstArray is declared as const

// Modifying properties in objects
myConstObject.name = "ABC"; // This would throw an error because myConstObject is declared as const

// Deleting properties in arrays (using the delete operator)
delete myConstArray[1];
// delete myConstArray[1]; // This would throw an error because myConstArray is declared as const

// Deleting properties in objects (using the delete operator)
delete myConstObject.age;
// delete myConstObject.age; // This would throw an error because myConstObject is declared as const

