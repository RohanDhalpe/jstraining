// Question 1 : 
// 1] What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? 
// 2] Do statements after the loop run?
// 3] What is the return value? 
// 4] Can we pass a return value from within a loop?
// 5] Can you return from inside an if block?
// 6] What impact does that have?

// Ans:
// 1] Adding a Loop or Switch Case Block Inside a Function with return Instead of break:

//   When you add a loop (for loop or while loop) or a switch case block inside a function and use return instead of break, it affects the flow of execution differently depending on the control flow construct used.
//   In a loop, return immediately exits the function, stopping the loop and preventing any statements after the loop from running.
//   In a switch case block, return exits the function if it is used within a case block. It behaves similarly to using break within a switch case block, where it exits the switch block.
//   Do Statements After the Loop Run?

// 2] No, statements after the loop will not run if a return statement is encountered within the loop. The function immediately exits upon encountering the return statement, bypassing any subsequent code.
// 3] Return Value:  The return value is the value provided in the return statement. It can be of any data type that the function is expected to return.
// 4] Passing a Return Value from Within a Loop: Yes, you can pass a return value from within a loop. When you use return within a loop, the function immediately exits with the specified return value, regardless of where the return statement is located within the loop.
// 5] Returning from Inside an If Block:  Yes, you can use return from inside an if block. Similar to using return within a loop, the function will exit immediately upon encountering the return statement within the if block, and any subsequent code will not be executed.
// 6] Impact of Using Return Inside an If Block:  Using return inside an if block causes the function to exit at that point, skipping any code that follows the return statement within the function. This can be useful for conditionally terminating the function based on certain criteria.
