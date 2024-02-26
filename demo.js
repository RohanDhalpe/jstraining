// 1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument
// Example:
//  const func = async () => {
//   console.log(“Printing before”)
//   //Call your function here eg. sleep(3000)
//   console.log(“Printing after”)
// }

const sleep = (milliseconds) => {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
};

const func = async () => {
  console.log("Printing before");
  await sleep(3000);
  console.log("Printing after");
};

func();

// 2.  Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). 
// Log the data into the console once it is received

const myPromise = new Promise((resolve, reject) => {
  fetch("https://reqres.in/api/users")
    .then(response => response.json()) 
    .then(data => {
      console.log(data);
      resolve(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      reject(error);
    });
});

myPromise.then(res => {
  console.log(res);
}).catch(error => {
  console.log(error);
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
    console.log('Error caught in testAsyncFunction: ', err);
  });
};

testAsyncFunction()
  .then((res) => {
    console.log('Response in then block: ', res);
  })
  .catch((err) => console.log('Error in catch block: ', err));




// 4.  What will be printed to the console?

const testAsyncFunction = () => {
  return Promise.reject('Test static reject');
};

testAsyncFunction()
  .then((res) => {
    console.log('Response in then block', res);
  })
  .catch((err) => console.log('Error in catch block', err));

  //Output : Error in catch block Test static reject


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
// output: Error caught in testAsyncFunction Test Reject
//         Error in catch block: Error: Forced error


// 6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.

function fetchDataWithDelay() {
  return new Promise((resolve, reject) => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      })
      .catch(error => {
        reject(error);
      });
  });
}

  fetchDataWithDelay()
  .then(data => {
    console.log('Data received after 2 seconds:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// 7. Complete the above tasks with async/await.
  
async function fetchDataWithDelay() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    return data;
  } catch (error) {
    throw error;
  }  
}

async function main() {
  try {
    const data = await fetchDataWithDelay();
    console.log('Data received after 2 seconds:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
main();

