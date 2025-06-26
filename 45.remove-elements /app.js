// REMOVE ELEMENTS IN JAVASCRIPT

/*
      1. parent.removeChild(parent.children[index]);
      2. element.remove()
*/

// Step 1: Select the parent and the item to be removed
const listContainer = document.querySelector(".list");
listContainer.removeChild(listContainer.children[1]); // This is "Item 2"

// Optionallyss, create and remove another item using remove()
const temporaryItem = document.createElement("div");
temporaryItem.className = "list-item";
temporaryItem.textContent = "Temporary Item";

// Append the temporary item
listContainer.appendChild(temporaryItem);

// Method 2: Remove the element directly using element.remove()
temporaryItem.remove();

/*
      Summary:
      - removeChild(item) → Use this when you have access to the parent
      - element.remove() → Use this when you have access only to the item
*/
