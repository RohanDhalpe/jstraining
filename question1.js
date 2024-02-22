// Question 1 : 
// 1] What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? 
// Ans :  When we  use return inside a loop or a switch case block inside a function, it will immediately exit the function and return the specified value. 

    function findNumber(arr, target) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === target) {
              return true; // If target found, return true and exit the function
          }
      }
      return false; // If target not found in loop, return false
    }

    const numbers = [1, 2, 3, 4, 5];
    console.log(findNumber(numbers, 3)); // Output: true

// 2] Do statements after the loop run?
//  Ans : No, statements after the loop will not run if return is used inside the loop.
    function findNumber(arr, target) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === target) {
              return true; // If target found, return true and exit the function
          }
      }
      console.log("This line will not be executed if target is found.");
      return false; // If target not found in loop, return false
    }

    const numbers = [1, 2, 3, 4, 5];
    console.log(findNumber(numbers, 3)); // Output: true

// 3] What is the return value? 
// Ans : Return Value:  The return value is the value provided in the return statement. It can be of any data type that the function is expected to return.

// 4] Can we pass a return value from within a loop?
// Ans: Yes, we can pass a return value from within a loop. When we use return within a loop, the function exits with the specified return value.
    function findFirstPositiveNumber(numbers) {
      for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] > 0) {
              return numbers[i]; // Return the first positive number found
          }
      }
      return -1; // Return -1 if no positive number found
    }

    const numberArray = [0, -2, -5, 3, -8];

    console.log(findFirstPositiveNumber(numberArray)); // Output: 3

// 5] Returning from Inside an If Block:  Yes, we can use return from inside an if block. The function will exit when the return statement encountered in if block, and any code will not be executed.
 