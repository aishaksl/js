// Select the second child element (Child 2)
const child = document.querySelectorAll(".child")[1];

/*
   - parentElement → goes up to the parent
   - children → gets all direct child elements
   - firstElementChild / lastElementChild → get first or last child
   - nextElementSibling / previousElementSibling → navigate between siblings
*/

const parent = child.parentElement;
console.log("Parent Element:", parent);

const children = parent.children;
console.log("All Children:", children);

const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;

console.log("First Child:", firstChild); // <div>Child 1</div>
console.log("Last Child:", lastChild); // <div>Child 3</div>

const nextSibling = child.nextElementSibling;
const previousSibling = child.previousElementSibling;

console.log("Next Sibling:", nextSibling); // <div>Child 3</div>
console.log("Previous Sibling:", previousSibling); // <div>Child 1</div>
