// KEYBOARD EVENTS

/*
  - keydown   → Fires when any key is pressed down.
  - keyup     → Fires when a pressed key is released.
  x keypress  → (Deprecated) Used to fire when a key that produces a character value is pressed.
                  Prefer using keydown for most purposes.

  Useful properties of the event object:
  - event.key       → The actual key value pressed (e.g., "a", "Enter", "ArrowLeft")
  - event.code      → The physical key code (e.g., "KeyA", "Enter")
  x event.keyCode   → The numeric code of the key (deprecated, avoid using)
 */

const input = document.getElementById("myInput");

// 1. keydown
input.addEventListener("keydown", function (event) {
  console.log("Key down:", event.key);
});

// 2. keyup
input.addEventListener("keyup", function (event) {
  console.log("Key up:", event.key);
});

// 3. keypress (not recommended, shown just for reference)
input.addEventListener("keypress", function (event) {
  console.log("Key press (deprecated):", event.key);
});

// Example: When the user presses F5, this prevents the page from refreshing

document.addEventListener("keydown", function (event) {
  if (event.key === F5) {
    event.preventDefault;
    alert("Page refreshing blocked"); // Show a message to the user
  }
});

// Example: Redirecting to the page of the product we searched for.

input.addEventListener("keydown", run);

function run() {
  if (event.key === Enter) {
    productName = input.value.trim();
  }
  if (productName !== "") {
    window.location.href = "products/" + productName + "html";
  } else {
    alert("Please type a product name.");
  }
}
