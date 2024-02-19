// 1] Declare a variable - let a;. On another line assign any value you like to a.
//    Log the value of a before and after assignment. Try doing the same with const.
//    Use the typeof operator to find the types of different variables. 
//    Specially note what the typeof operator returns for arrays, null values and NaN. 
//    How can you find if a variable is an array or NaN besides typeof?

let a;
console.log(a);
a = 10;
console.log(a);

const b = 5;
console.log(b);
b = 10;
// TypeError: Assignment to constant variable.
console.log(b);


console.log(typeof a); // "number"
console.log(typeof b); // "number"

let arr = [1, 2, 3];
console.log(typeof arr); // "object"

let nullValue = null;
console.log(typeof nullValue); // "object"

let notANumber = NaN;
console.log(typeof notANumber); // "number"
console.log(isNaN(notANumber)); // true
