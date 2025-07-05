// Promise

/*
A Promise is an object that represents the eventual completion (or failure)
of an asynchronous operation and its resulting value.

It helps you manage asynchronous code more cleanly compared to nested callbacks.
*/

// Promise States:
// 1) Pending - The operation is still ongoing.
// 2) Fulfilled - The operation completed successfully (resolved).
// 3) Rejected - The operation failed (rejected).

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("The operation was successful!");
  } else {
    reject("An error occurred.");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Promise completed (success or error)"));

// Using setTimeout with Promise

const waitTwoSeconds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Executed after waiting 2 seconds.");
  }, 2000);
});

waitTwoSeconds
  .then((message) => console.log(message)) // "Executed after waiting 2 seconds."
  .catch((error) => console.error(error));

// Promise Chaining

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(a + b);
  });
};

add(5, 3)
  .then((result) => {
    console.log(result); // 8
    return add(result, 10);
  })
  .then((newResult) => {
    console.log(newResult); // 18
  })
  .catch((error) => {
    console.error(error);
  });

/*
  - A Promise makes it easier to handle asynchronous tasks.
  - Use .then() to handle successful results.
  - Use .catch() to handle errors.
  - Use .finally =() to handle both
  - You can chain .then() calls for sequential asynchronous operations.
*/
