// 1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument
// Example:
// const func = async () => {
//   console.log("Printing before");
//   // Call your function here eg. sleep(3000)
//   console.log("Printing after");
// }

const sleep = (milliseconds) => {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
};

const func = async () => {
  console.log("Printing before"); // Output: Printing before
  await sleep(3000); // Wait for 3 seconds
  console.log("Printing after"); // Output: Printing after
};

func(); // Call the async function

// 2. Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ).
// Log the data into the console once it is received

const myPromise = new Promise((resolve, reject) => {
  fetch("https://reqres.in/api/users")
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      console.log(data); // Output: <data from the API>
      resolve(data); // Resolve the promise with the data
    })
    .catch(error => {
      console.error('Error fetching data:', error); // Output: Error fetching data: <error message>
      reject(error); // Reject the promise with the error
    });
});

myPromise.then(res => {
  console.log(res); // Output: <data from the API>
}).catch(error => {
  console.log(error); // Output: <error message>
});


// 3. What will be printed to the console when the promise resolves and when it rejects?
const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Test Resolve');
    } else {
      reject('Test Reject');
    }
  }).catch((err) => {
    console.log('Error caught in testAsyncFunction: ', err); // Output: Error caught in testAsyncFunction: <error message>
  });
};

testAsyncFunction()
  .then((res) => {
    console.log('Response in then block: ', res); // Output: Response in then block: <resolved value>
  })
  .catch((err) => console.log('Error in catch block: ', err)); // Output: Error in catch block: <rejected reason>

// 4. What will be printed to the console?

const testAsyncFunction = () => {
  return Promise.reject('Test static reject');
};

testAsyncFunction()
  .then((res) => {
    console.log('Response in then block', res);
  })
  .catch((err) => console.log('Error in catch block', err));

// Output: Error in catch block Test static reject

// 5. What will be printed to the console?

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Test Resolve');
    } else {
      reject('Test Reject');
    }
  }).catch((err) => {
    console.log('Error caught in testAsyncFunction', err);
    throw new Error('Forced error');
  });
};

testAsyncFunction()
  .then((res) => {
    console.log('Response in then block: ', res);
  })
  .catch((err) => console.log('Error in catch block: ', err));

// Output: Error caught in testAsyncFunction Test Reject
//         Error in catch block: Error: Forced error

// 6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.

function fetchDataWithDelay() {
  return new Promise((resolve, reject) => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          resolve(data); // Resolve the promise with the fetched data after 2 seconds
        }, 2000);
      })
      .catch(error => {
        reject(error); // Reject the promise if there's an error fetching the data
      });
  });
}

fetchDataWithDelay()
  .then(data => {
    console.log('Data received after 2 seconds:', data); // Output: Data received after 2 seconds: <data from the API>
  })
  .catch(error => {
    console.error('Error fetching data:', error); // Output: Error fetching data: <error message>
  });

// 7. Complete the above tasks with async/await.

async function fetchDataWithDelay() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
    return data; // Return the fetched data
  } catch (error) {
    throw error; // Throw any error that occurred during fetching
  }  
}

async function main() {
  try {
    const data = await fetchDataWithDelay(); // Fetch data with delay
    console.log('Data received after 2 seconds:', data); // Output: Data received after 2 seconds: <data from the API>
  } catch (error) {
    console.error('Error fetching data:', error); // Output: Error fetching data: <error message>
  }
}

main(); // Call the main function
