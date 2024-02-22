let a;
console.log(a); // Output: undefined

a = 10;
console.log(a); // Output: 10

const b = 5;
console.log(b); // Output: 5

b = 10; // This would throw an error because b is declared as const
// TypeError: Assignment to constant variable.
console.log(b); // This line will not be executed due to the error

console.log(typeof a); // Output: "number"
console.log(typeof b); // Output: "number"

let arr = [1, 2, 3];
console.log(typeof arr); // Output: "object"

let nullValue = null;
console.log(typeof nullValue); // Output: "object"

let notANumber = NaN;
console.log(typeof notANumber); // Output: "number"
console.log(isNaN(notANumber)); // Output: true
