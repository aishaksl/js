// DESTRUCTURING IN JS

// 1. ARRAY DESTRUCTURING

const colors = ["red", "green", "blue"];

// Old Way
const firstColor = colors[0];
const secondColor = colors[1];

// Using Destructuring
const [color1, color2, color3] = colors;

console.log(color1);
console.log(color2);
console.log(color3);

// Skipping elements
const [, , onlyThirdColor] = colors;
console.log(onlyThirdColor);

// Default values
const fruits = ["apple"];
const [fruit1, fruit2 = "banana"] = fruits;

console.log(fruit1);
console.log(fruit2);

// 2.OBJECT DESTRUCTURING

const person = {
  name: "Alice",
  age: 30,
  country: "USA",
};

// Old Way
const name1 = person.name;
const age1 = person.age;

// Using Destructuring
const { name, age, country } = person;

console.log(name);
console.log(age);
console.log(country);

// Renaming While Destructuring
const { name: personName, age: personAge } = person;

console.log(personName);
console.log(personAge);
