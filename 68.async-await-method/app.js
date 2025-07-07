// ASYNC/AWAIT

/*  
    Async/await allows you to write asynchronous code that looks synchronous.
   'async' makes a function return a Promise automatically.
   'await' pauses the execution until the Promise is resolved.
*/

const button = document.querySelector(".btn");

// Example with PROMISE

button.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json)
    .then((post) => {
      console.log(post);
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response) => response.json)
        .then((comments) => console.log(comments));
    });
});

// Example with AYSNC-AWAIT

button.addEventListener("click", async () => {
  const post = await (
    await fetch("https://jsonplaceholder.typicode.com/users/1")
  ).json();

  const comments = await (
    await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    )
  ).json();

  console.log(post, comments);
});

// await is only valid in async Functions and the top level bodies of modules
