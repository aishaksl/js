// DATA TYPES IN JAVASCRIPT

/* 
1. Primitive Data Types
-------------------------
- Stored directly in the variable’s memory (in STACK memory).
- Simple, fixed-size values.
- When assigned to another variable, the value is copied.
- Changing one does NOT affect the other.

Types:
- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt
*/

let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20

/* 
Explanation:
a and b are primitive types.
When b = a, a copy of the value is made.
They are stored separately in stack memory.
*/

/* 
2. Reference Data Types
-------------------------
- Stored in HEAP memory.
- The variable holds a reference (address) to the object.
- When assigned to another variable, the reference is copied — not the object itself.
- Changing one affects the other, since they point to the same memory.

Types:
- Object
- Array
- Function
- Date
- Map
- Set
*/

let obj1 = { value: 10 };
let obj2 = obj1;

obj2.value = 20;

console.log(obj1.value); // 20

/* 
Explanation:
obj1 and obj2 both point to the same object in heap memory.
Changing one affects the other.
*/

/* 
Reference Type Comparison Example
----------------------------------
Even if two arrays or objects have the same content,
they are NOT equal unless they refer to the exact same object.
*/

let num1 = [1, 2, 3];
let num2 = [1, 2, 3];

if (num1 === num2) {
  console.log("equal");
} else {
  console.log("not equal"); // Output
}

/*
Explanation:
num1 and num2 look the same but are different objects in memory.
Reference types are compared by memory address, not content.
So the result is "not equal".
*/

/* 
MEMORY SUMMARY
----------------
- Stack Memory:
  Stores primitive values directly.
  Fast and small.
  
- Heap Memory:
  Stores objects, arrays, functions, etc.
  Variables store a reference (address) to the actual data.
*/
