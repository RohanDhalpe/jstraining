// 1] What is the difference between ++i and i++?
// Ans : Both ++i and i++ are increment operators used in JavaScript.
//       ++i is the pre-increment operator, which increments the value of i and then returns the incremented value.
//       i++ is the post-increment operator, which returns the current value of i and then increments it.

// 2] What do you think would happen if you pass an index beyond the range of the string? Or if you pass a negative index? Try it out.
// Ans : If we pass an index beyond the range of the string or a negative index to access a character in a string in JavaScript, it will return undefined.
            const str = "hello";
            console.log(str[10]); // Output: undefined
            console.log(str[-1]); // Output: undefined

// 3] Do you think JSON.stringify would work for arrays as well? What about nested objects? What happens if we pass numbers, strings, undefined, null to JSON.stringify?
// Ans:  a) JSON.stringify for Arrays and Nested Objects:
//          Yes, JSON.stringify works for arrays as well as nested objects in JavaScript. It converts JavaScript objects or arrays into JSON strings.
            
            const arr = [1, "two", { three: 3 }, [4, 5]];
            const jsonStringArray = JSON.stringify(arr);
            console.log(jsonStringArray); // Output: "[1,"two",{"three":3},[4,5]]"

//       b) Passing Different Types to JSON.stringify:
//          JSON.stringify can handle numbers, strings, undefined, null, objects, and arrays.
//          Numbers and strings are converted to their JSON representations.
//          Undefined values are  ignored during serialization.
//          Null values are converted to "null" in JSON string.
                        
            const number = 42;
            const string = "Hello";
            const undefinedValue = undefined;
            const nullValue = null;

            console.log(JSON.stringify(number)); // Output: "42"
            console.log(JSON.stringify(string)); // Output: ""Hello""
            console.log(JSON.stringify(undefinedValue)); // Output: undefined is ignored
            console.log(JSON.stringify(nullValue)); // Output: "null"



// 4] What happens if you pass a regular/invalid JSON string to JSON.parse? 
//    What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that?
// Ans: JSON.parse is used to parse a JSON string and convert it into a JavaScript object.
//      If we pass a regular JSON string, it will be parsed successfully and return the corresponding JavaScript object.

        const validJSONString = '{"name": "John", "age": 30}';
        const parsedObject = JSON.parse(validJSONString);
        console.log(parsedObject); // Output: { name: 'John', age: 30 }

//      If we pass an invalid JSON string, JSON.parse will throw a SyntaxError.
        
        const invalidJSONString = '{"name": "John", "age": 30,}';
        try {
            const parsedObject = JSON.parse(invalidJSONString);
            console.log(parsedObject);
        } catch (error) {
            console.error(error); // Output: SyntaxError: Unexpected token } in JSON at position 23
        }
