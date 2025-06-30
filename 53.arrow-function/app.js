//ARROW FUNCTION

// Regular function:
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};

// If the code is one line, you can remove {}, (),return.
const addShort = (a, b) => a + b;

// One parameter:
const square = (x) => x * x;

// No parameter:
const greet = () => console.log("Hello!");

console.log("add(2, 3):", add(2, 3)); // 5
console.log("addArrow(4, 5):", addArrow(4, 5)); // 9
console.log("addShort(10, 15):", addShort(10, 15)); // 25
console.log("square(6):", square(6)); // 36
greet(); // Hello!
