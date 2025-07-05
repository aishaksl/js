// callback()

/*
    Passing a function as a parameter to another function,
    and calling it after the task is done.
*/

function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback(); // call the callback after greeting
}

function afterGreet() {
  console.log("The greeting is done.");
}

greet("Ayse", afterGreet);

// Callback with asynchronous operation

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched.");
    callback(); // call the callback after fetching data
  }, 2000);
}

function afterFetch() {
  console.log("Now we can process the data.");
}

fetchData(afterFetch);
