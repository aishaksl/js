// AJAX

// AJAX (Asynchronous JavaScript And XML) using fetch
// This lets us get data from a server without reloading the entire page

/* 
	•	XMLHttpRequest: The classic AJAX method.
	•	fetch API: Modern and cleaner syntax for making requests.
	•	jQuery.ajax(): Shortcut for AJAX in projects using jQuery.
*/

// fetch API

const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById("result").innerText = data.title;
  })
  .catch((error) => console.error("Error:", error));

/*
   - fetch(url, options) ➔ send the request.
   - then(response => response.json()) ➔ convert the response to JSON.
   - then(data => { ... }) ➔ use the received data.
   - catch(error => { ... }) ➔ catch and handle errors.
 */

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "My New Post",
    body: "This post was created using fetch POST",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("POST data:", data))
  .catch((error) => console.error("POST error:", error));

// method: ""
/*
  "POST"    -> Send new data
  "PUT"     -> Replace data fully
  "PATCH"   -> Update data partially
  "HEAD"    -> Retrieve headers only
  "OPTIONS" -> Get communication ooptions
  "CONNECT" -> Establish a tunnell (proxy/SSL)
  "TRACE"   -> Diagnostic loop-back test 
  "DELETE"  -> Remove data
*/

/*
  headers: {
    "Content-Type": "application/json", // Specifies that the data being sent is in JSON format.
    "Accept": "application/json", // Tells the server that the client expects JSON in response.
    "Authorization": "Bearer YOUR_TOKEN_HERE", // Sends a token for authentication if the API requires it.
    "Cookie": "sessionId=abc123", // Sends cookies manually with the request.
    "User-Agent": "MyCustomApp/1.0", // Identifies the client application making the request.
    "X-Requested-With": "XMLHttpRequest", // Often used to indicate an AJAX request.
    "X-Api-Key": "YOUR_API_KEY" // Sends an API key if your API requires it.
  },
*/

/* 
  body: JSON.stringify({
     // Used to send data to the server in your request
  })
*/
//// The data is often sent in JSON format (JSON.stringify)

// XMLHttpRequest  xxxx

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

xhr.onload = () => {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    document.getElementById("result").innerText = data.title;
  } else {
    console.error("Request failed with status:", xhr.status);
  }
};

xhr.onerror = () => console.error("Request failed due to a network error.");
xhr.send();

/*
   const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
   xhr.open("GET", url, true); // Set up the request: method, URL, async
   xhr.onload = () => { ... }; // Function to run when the response is received
   xhr.onerror = () => { ... }; // Function to run if there is a network error
   xhr.send(); // Send the request to the server
   xhr.status; // HTTP response status code ( 200 = success, 400 = bad request, 404 = not found, 500 = server error)
   xhr.responseText; // The response data as a text string
*/
