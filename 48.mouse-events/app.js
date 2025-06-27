// MOUSE EVENTS

/*

   1. click       → Triggered when the user clicks an element (left mouse button).
   2. dblclick    → Triggered when the user double-clicks an element.
   3. mouseover   → Triggered when the mouse pointer enters the element (like hover).
   4. mouseout    → Triggered when the mouse pointer leaves the element.
   5. mousedown   → Triggered when a mouse button is pressed down on an element.
   6. mouseup     → Triggered when a pressed mouse button is released.
   7. mousemove   → Triggered whenever the mouse is moved over the element.

 */

const button = document.getElementById("myButton");

// 1. click
button.addEventListener("click", function () {
  console.log("Button was clicked!");
});

// 2. dblclick
button.addEventListener("dblclick", function () {
  console.log("Button was double-clicked!");
});

// 3. mouseover
button.addEventListener("mouseover", function () {
  console.log("Mouse is over the button.");
});

// 4. mouseout
button.addEventListener("mouseout", function () {
  console.log("Mouse left the button.");
});

// 5. mousedown
button.addEventListener("mousedown", function () {
  console.log("Mouse button is pressed down.");
});

// 6. mouseup
button.addEventListener("mouseup", function () {
  console.log("Mouse button is released.");
});

// 7. mousemove
document.addEventListener("mousemove", function (event) {
  console.log("Mouse is moving. X:", event.clientX, "Y:", event.clientY);
});
