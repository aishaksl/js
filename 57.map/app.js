// MAP

/*
    The map method loops over an ARRAY and returns a new ARRAY.
    It does NOT change the original array.
    It applies a function to each element and collects the results
*/

// Map with key-value. (key should'nt be reference type (object,array))

const map1 = new Map(); // Create a map

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a")); // get
console.log(map1.set("a", 97)); // set
console.log(map1.size); // size
console.log(map1.delete("a")); // delete
console.log(map1.size); // (2)
console.log(map1.has("a")); // has

//  Loop over the Set using for...of

for (let [key, value] of map1) {
  console.log(key, value);
}

// 1. Basic usage

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] (original stays the same)

// 2. Using arrow function

const nums = [5, 10, 15];

const tripled = nums.map((num) => num * 3);

console.log(tripled); // [15, 30, 45]

// 3. Using map with objects

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

const names = users.map((user) => user.name);

console.log(names); // ["Alice", "Bob"]
