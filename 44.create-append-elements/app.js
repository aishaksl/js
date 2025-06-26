// CREATE & APPEND ELEMENTS

/*
      - createElement() → Creates a new HTML element in memory.
      - appendChild() → Adds the new element as the last child of a parent.
*/

const newChild = document.createElement("div");

// Step 2: Add a class and some content to it
newChild.className = "child";
newChild.textContent = "New Child Element";

// Step 3: Select the parent element
const parent = document.querySelector(".parent");

// Step 4: Append the new child to the parent
parent.appendChild(newChild);
