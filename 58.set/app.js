// SET USAGE IN JAVASCRIPT

/*
   Stores unique values only (no duplicates).
   Behaves like an array but cannot hold the same value twice.
   Keeps the insertion order of values.
*/

const mySet = new Set(); // Creates a Set

mySet.add("apple");
mySet.add("banana");
mySet.add("orange");
mySet.add("apple"); // Adding "apple" again has no effect because Set keeps only unique values

console.log(mySet.has("banana")); // has (true)
console.log(mySet.has("grape")); //  has(false)

mySet.delete("banana"); // delete
console.log(mySet.has("banana")); // false

console.log(mySet.size); // size (2 ('apple', 'orange'))

//  Loop over the Set using for...of

for (let item of mySet) {
  console.log(item);
}

// Convert a Set to an Array
const myArray = [...mySet];
console.log(myArray); // ['apple', 'orange']

// Remove duplicates from an Array using Set
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// Clear all values from the Set if needed
mySet.clear();
console.log(mySet.size); // 0
