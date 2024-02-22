// 2] Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. 
//    What do you expect to happen in both cases? What actually happens in both cases. 
//    What is the difference between an object declared as a let or a const variable?

let myArr = [5, 10, 15];
console.log(myArr); // Output: [5, 10, 15]

myArr[0] = 4;
console.log(myArr); // Output: [4, 10, 15]

delete myArr[0];
console.log(myArr); // Output: [empty, 10, 15]

let myObj = { name: "rohan", age: 10 };
console.log(myObj); // Output: { name: "rohan", age: 10 }

myObj.age = 15;
console.log(myObj); // Output: { name: "rohan", age: 15 }

delete myObj.age;
console.log(myObj); // Output: { name: "rohan" }


//===============================================================//

// Create an array using const
const myConstArray = [1, 2, 3];

// Create an object using const
const myConstObject = { name: "Rohan", age: 22 };

// Modifying properties in arrays
myConstArray[0] = 10;
console.log(myConstArray); // Output: [10, 2, 3]

// Modifying properties in objects 
myConstObject.name = "ABC";
console.log(myConstObject); // Output: { name: "ABC", age: 22 }

// Deleting properties in arrays (using the delete operator) (Allowed, but leaves an "empty" slot)
delete myConstArray[1];
console.log(myConstArray); // Output: [10, empty, 3]

// Deleting properties in objects (using the delete operator) (Allowed)
delete myConstObject.age;
console.log(myConstObject); // Output: { name: "ABC" }

// Using const with arrays and objects means the reference to them cannot be reassigned.
// However, it does not prevent modifying the contents of arrays or properties of objects.
// Modifying elements in arrays and properties in objects, as well as deleting elements/properties, is allowed with const.
