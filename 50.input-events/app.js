//INPUT EVENTS IN JAVASCRIPT

/*

  Basic input events:
  1. input     → Fires on every change (typing, deleting, etc.)
  2. change    → Fires when input loses focus after value is changed
  3. focus     → Fires when the input gets focus
  4. blur      → Fires when the input loses focus
 
  Clipboard & selection events:
  5. copy      → Fires when the user copies text from the input
  6. paste     → Fires when the user pastes text into the input
  7. cut       → Fires when the user cuts (Ctrl+X) text from the input
  8. select    → Fires when the user selects part of the input text
  
 */

// BASIC EVENTS

const input = document.getElementById("myInput");

input.addEventListener("input", function () {
  console.log("Typing... Current value:", input.value);
});

input.addEventListener("change", function () {
  console.log("Value changed (after blur):", input.value);
});

input.addEventListener("focus", function () {
  console.log("Input is now focused.");
});

input.addEventListener("blur", function () {
  console.log("Input lost focus.");
});

// CLIPBOARD & SELECTION EVENTS

input.addEventListener("copy", function () {
  console.log("Text copied.");
});

input.addEventListener("paste", function () {
  console.log("Text pasted.");
});

input.addEventListener("cut", function () {
  console.log("Text cut.");
});

input.addEventListener("select", function () {
  console.log("Text selected.");
});
