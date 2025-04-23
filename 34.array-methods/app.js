// ARRAY METHODS

/* 
   push()    : Adds an item to the end
   unshift() : Adds an item to the beginning

   pop()     : Removes the last item
   shift()   : Removes the first item
   
   splice()  : Remove items from an array.
	           Add items to an array.
	           Or do both at the same time.

    toString() : Converts the whole array into a string.
	             Elements are separated by commas by default.
	             Cannot change the separator.
    join       : Similar to toString() but more flexible.
	             You can choose a separator.
 
    concat()    : Combine two or more arrays into a new array.
	              It does not change the original arrays.
                  It returns a new array.
             
    slice()
  
    reverse()   : It reverses the order of elements in an array.
	              It changes (mutates) the original array.

   includes()   : Checks if an array or a string contains a certain value.
   
*/

// push() – Adds an item to the end

let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]

// pop() – Removes the last item

fruits.pop();
console.log(fruits); // ["apple", "banana"]

// unshift() – Adds an item to the beginning

fruits.unshift("grape");
console.log(fruits); // ["grape", "apple", "banana"]

// shift() – Removes the first item

fruits.shift();
console.log(fruits); // ["apple", "banana"]

// splice() - Remove items from an array. Add items to an array. Or do both at the same time.

/*
    array.splice(startIndex, deleteCount, item1, item2, ...)

    startIndex: Where to start changing the array.
	deleteCount: How many items to remove.
    item1, item2, ...: (Optional) Items to add in that position.
*/

// 1.Remove Items

let colors = ["red", "green", "blue", "yellow"];
colors.splice(1, 2);
console.log(colors); // ["red", "yellow"]

//Starts at index 1, removes 2 items: “green”, “blue”

// 2.Add Items

let fruit = ["apple", "banana"];
fruit.splice(1, 0, "orange");
console.log(fruit); // ["apple", "orange", "banana"]

//Starts at index 1, removes 0, adds "orange" at index 1

// 3.Replace Items

let animals = ["cat", "dog", "rabbit"];
animals.splice(1, 1, "lion");
console.log(animals); // ["cat", "lion", "rabbit"]

//Removes "dog" at index 1, adds "lion" instead

/*
    toString() : Converts the whole array into a string.
	             Elements are separated by commas by default.
	             Cannot change the separator.
*/

var color = ["red", "green", "blue"];
var result = color.toString();
console.log(result); // "red,green,blue"

/*
    join : Similar to toString() but more flexible.
	       You can choose a separator.
*/

var color = ["red", "green", "blue"];
var result = color.join();
console.log(result); // "red,green,blue"

//Example with custom separator:
var color = ["red", "green", "blue"];
var result = color.join(" - ");
console.log(result); // "red - green - blue"

//Example with no separator:
var letters = ["H", "e", "l", "l", "o"];
var word = letters.join("");
console.log(word); // "Hello"

// concat()

// let newArray = array1.concat(array2, array3, ...);

/*
    concat()    : Combine two or more arrays into a new array.
	              It does not change the original arrays.
                  It returns a new array.     
*/

let fruitss = ["apple", "banana"];
let tropical = ["mango", "pineapple"];

let allFruits = fruitss.concat(tropical);

console.log(allFruits); // ["apple", "banana", "mango", "pineapple"]

// slice()

/*
    array.slice(startIndex, endIndex)

    startIndex: the index to start from (inclusive)
    endIndex: the index to stop before (exclusive)
    If you skip endIndex, it goes until the end of the array.
*/

var color = ["red", "green", "blue", "yellow"];
let sliced = color.slice(1, 3);

console.log(sliced); // ["green", "blue"]
console.log(color); // Original is unchanged

// reverse()

/*
    array.reverse()

    It reverses the order of elements in an array.
	It changes (mutates) the original array.
*/

let letter = ["a", "b", "c"];
let reversed = letters.reverse();

console.log(reversed); // ["c", "b", "a"]
console.log(letter); // ["c", "b", "a"] — same, because it's mutated

//split

/*
    string.split(separator)
	
    It splits a string into an array based on a separator you provide.
*/

//Split by comma

let text = "apple,banana,orange";
let resultt = text.split(",");

console.log(resultt); // ["apple", "banana", "orange"]

var word = "hello";
var letters = word.split("");

console.log(letters); // ["h", "e", "l", "l", "o"]

let sentence = "I love JavaScript";
let words = sentence.split(" ");

console.log(words); // ["I", "love", "JavaScript"]

// includes(): Checks if an array or a string contains a certain value.

// For Arrays

var color = ["red", "blue", "green"];
console.log(color.includes("blue")); // true
console.log(color.includes("yellow")); // false

// For Strings

const message = "Hello, world!";
console.log(message.includes("world")); // true
console.log(message.includes("World")); // false (case-sensitive)
