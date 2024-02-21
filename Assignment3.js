// 1. Declare a variable let age = 25;. Write a series of if else statements that will:

// Print child to the console if age is less than equal to 12.

// Print teen to the console if age is between 13 and 18 (inclusive).

// Print adult to the console if age is above 18

let age = 25;

if (age <= 12) {
    console.log("child");
} else if (age >= 13 && age <= 18) {
    console.log("teen");
} else {
    console.log("adult");
}


// 2.  Do the same using switch case.

let Age = 25;
let ageGroup;

switch (true) {
    case (Age <= 12):
        ageGroup = "child";
        break;
    case (Age >= 13 && Age <= 18):
        ageGroup = "teen";
        break;
    default:
        ageGroup = "adult";
}

console.log(ageGroup);

// 3. Declare a variable let arraySize = 25;. Using a for loop, 
// add numbers from one onwards into an array till the arraySize is reached.

let arrSize = 10;
let numberArray = [];

for (let i = 1; i <= arrSize; i++) {
  numberArray.push(i);
}

console.log(numberArray);

// 4. Accomplish the same using a while loop.

let arraySize = 10;
let numbersArray = [];
let i = 1;

while (i <= arraySize) {
    numbersArray.push(i);
    i++;
}

console.log(numbersArray);

// 5. Can you use return instead of break in loops?

function findNumber(array, target) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
          return i; // Return if the target is found
      }
  }
  return -1; // Return -1 if the target is not found
}
