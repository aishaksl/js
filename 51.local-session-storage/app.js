// LOCAL STORAGE

/* 
       Data is stored PERMANENTLY in the browser.
       It remains even after the browser is closed.
*/

/*
       ADD: localStorage.setItem("key", "value");
       READ: localStorage.getItem("key");
       REMOVE: localStorage.removeItem("key");
       CLEAR: localStorage.clear();
*/

localStorage.setItem("username", "Aisha");

let localUser = localStorage.getItem("username");
console.log("LocalStorage - username:", localUser); // Output: Ayse

localStorage.removeItem("username");

localStorage.clear();

// SESSION STORAGE

/* 
       Data is stored TEMPORARILY in the browser.
       It is deleted when the tab or window is closed.
*/

/*
       ADD: sessionStorage.setItem("key", "value");
       READ: sessionStorage.getItem("key");
       REMOVE: sessionStorage.removeItem("key");
       CLEAR: sessionStorage.clear();
*/

sessionStorage.setItem("sessionId", "12345");

let sessionId = sessionStorage.getItem("sessionId");
console.log("SessionStorage - ID:", sessionId); // Output: 12345

sessionStorage.removeItem("sessionId");

sessionStorage.clear();

// =======================================
// 👤 BONUS: Store Object in Storage
// =======================================

/*
       Both storages can only store strings.
       To store an object, use JSON.stringify().
       To read it back, use JSON.parse().
*/

let user = {
  name: "Ayse",
  age: 30,
};

// FORM: localStorage.setItem("key", JSON.stringify(object));
localStorage.setItem("user", JSON.stringify(user));

// FORM: JSON.parse(localStorage.getItem("key"));
let savedUser = JSON.parse(localStorage.getItem("user"));
console.log("User name from object:", savedUser.name); // Output: Ayse
