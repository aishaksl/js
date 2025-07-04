// ASYNC

/* 
Async programming lets JS keep running while waiting for slow tasks (like API calls).
JS is single-threaded but uses the Event Loop to handle tasks in the background.
When done, tasks go to a queue, and the main thread runs them when ready.
*/

// Useful for
/*
    API calls
    Timers
    Events
*/

// setTimeout
console.log("First");

setTimeout(() => {
  console.log("Second (printed after 2 seconds)");
}, 2000);

console.log("Third");

//Expected Output: First - Third - Second (printed after 2 seconds)

// METHODS -> callback() , promises, async/await
