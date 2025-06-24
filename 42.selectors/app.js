// SELECTORS

// getElementById
const title = document.getElementById("title");
const bigTitle = document.getElementById("big-title");
console.log(title.textContent);
console.log(bigTitle.textContent);

// getElementsByClassName
const boxes = document.getElementsByClassName("box");
console.log(boxes[0].textContent);
console.log(boxes[1].textContent);

// getElementsByTagName ( div, span, p, a, img, h1, ul, ol, li, input, button, form, label, textarea, table, tr, td, th ...)
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[0].textContent);
console.log(paragraphs[1].textContent);

// querySelector
const firstBox = document.querySelector(".box");
console.log(firstBox.textContent);

// querySelectorAll
const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach((box) => {
  console.log(box.textContent);
});

// const secondBoxElement = document.querySelectorAll(".box")[1]; //

// querySelector with class
const specialParagraph = document.querySelector("p.special");
console.log(specialParagraph.textContent);

// getAttribute example
const link = document.querySelector("a");
const hrefValue = link.getAttribute("href");
console.log(hrefValue); // https://example.com

// Common attributes:
// id, class, href, src, alt, title, type, value, name,
// placeholder, disabled, checked, readonly, required, data-*

/* 
  WHAT CAN WE DO WITH SELECTORS?

  innerHTML vs textContent:
  -------------------------
  - innerHTML:
    Gets or sets the HTML content inside an element.
    It parses and renders HTML tags. (HTML etiketlerini okur ve yorumlar)
  - textContent:
    Gets or sets only the text inside an element.
    HTML tags are treated as plain text, not parsed (HTML etiketlerini metin olarak gosterir, yorumlamaz).

  Examples:
*/

// Using innerHTML
console.log(bigTitle.innerHTML);
bigTitle.innerHTML = "<span style='color:blue;'>Welcome!</span>"; // Changes content with HTML tags

// Using textContent
console.log(title.textContent);
title.textContent = "<b>Plain Text</b>"; // Shows tags as text, no formatting

/*
  classList vs className:
  -----------------------
  - classList:
    Provides a list-like interface to manage CSS classes.
    Methods: add(), remove(), toggle(), contains().
  - className:
    Gets or sets the complete list of CSS classes as a string.
*/

const firstBoxElement = document.querySelector(".box");

// Adding a class using classList
firstBoxElement.classList.add("highlight");
console.log(firstBoxElement.classList); // ["box", "highlight"]

// Removing a class using classList
// firstBoxElement.classList.remove("box");
// console.log(firstBoxElement.classList); // ["highlight"]

// Toggling a class using classList : Adds the class if it doesn’t exist, removes it if it already exists.
firstBoxElement.classList.toggle("active");
console.log(firstBoxElement.classList);

// Replacing all classes using className ( Eğer bu elementin önceden class’ı varsa, hepsi silinir.)
const secondBoxElement = document.querySelectorAll(".box")[1];
secondBoxElement.className = "new-class another-class";
console.log(secondBoxElement.className); // "new-class another-class"
