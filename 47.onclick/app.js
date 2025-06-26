// METHOD 2

function changeTitle() {
  document.querySelector(".title-2").textContent = "Button 2 clicked";
}

// METHOD 3

const btn = document.querySelector(".btn-3");
btn.addEventListener("click", function () {
  document.querySelector(".title-3").textContent = "Button 3 clicked";
});

// METHOD 4

const btn4 = document.querySelector(".btn-4");

function changeTheTitle(e) {
  document.querySelector(".title-4").textContent = "Button 4 clicked";
  // Print details about the event to the console
  console.log(e.type);
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target.textContent);
  console.log(e.target.className);
  console.log(e.clientX);
  console.log(e.clientY);
}

btn4.addEventListener("click", changeTheTitle);

/* 
  Event Object Properties

  e.type   -> The type of event (e.g., "click", "mouseover", etc.)

  e.target -> The element that triggered the event

  e.currentTarget -> The element the event handler is attached to

  e.target.textContent -> The text inside the element that triggered the event

  e.target.className -> The class name(s) of the element that triggered the event

  e.clientX / e.clientY -> Mouse position on the screen (horizontal and vertical)

*/
