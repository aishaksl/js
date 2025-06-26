// REPLACE ELEMENT IN JAVASCRIPT

// replaceChild() only works if the second argument is a direct child of the parent.
/*
  parent.replaceChild(newChild, oldChild)
  - newChild: the element that will replace the old one
  - oldChild: The CHILD element you want to replace
  - parent: the container that holds both
*/

// 1. Select the parent element
const list = document.querySelector(".list");

// 2. Select the old element you want to replace (child of parent)
const oldItem = list.children[1]; // This is "Item 2"

// 3. Create a new element to replace it
const newItem = document.createElement("div");
newItem.className = "item";
newItem.textContent = "Replaced Item";
newItem.style.color = "green";

// 4. Replace the old element with the new one
list.replaceChild(newItem, oldItem);
