//DIALOG BOXES

/*
     Alert
     Prompt
     Confirm
*/

// NOTE: All three of these methods are part of the WINDOW OBJECT in JavaScript.

// alert(): Used to show a simple message to the user with only an “OK” button.

alert("This is an alert message!");

// confirm(): Used to ask the user to confirm something.
// Returns true if the user clicks “OK”,
// Returns false if they click “Cancel”.

let confirmation = confirm("Are you sure you want to delete this?");
if (confirmation) {
  console.log("Deleted");
} else {
  console.log("Action canceled");
}

// prompt(): Used to get input from the user.
// ***** Returns the input as a string,
// or null if the user clicks “Cancel”.

let name = prompt("Please enter your name:");
if (name) {
  console.log("Hello, " + name + "!");
}
