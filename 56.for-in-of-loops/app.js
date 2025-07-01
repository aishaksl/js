// for ... in

/*
    Iterates over the keys (property names) of an object or the indexes of an array (as strings).
    Used when you need to get keys from an object.
*/

// Object
const person = { name: "Alice", age: 30, city: "NY" };

for (let key in person) {
  console.log(key); // "name", "age", "city"
  console.log(person[key]); // "Alice", 30, "NY"
}

// Array
const colorss = ["red", "green", "blue"];

for (let index in colorss) {
  console.log(index); // "0", "1", "2" (string olarak)
  console.log(colorss[index]); // "red", "green", "blue"
}

// for ... of

/*
    Iterates over values in iterable objects (arrays, strings, maps, sets).
    Used when you need to get values directly from an iterable.
*/

const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

const world = "hello";
for (let letter of world) {
  console.log(letter);
}
