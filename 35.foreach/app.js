// .foeEach

// It’s a method that runs a function once for each element in the array.

/*
    array.forEach(function (item, index, array) {
       // do something with item 
    });
*/

let fruits = ["apple", "banana", "orange"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});

// With index

fruits.forEach(function (fruit, index) {
  console.log(index + ": " + fruit);
});

// forEach()
// Does not return a new array.
// It’s mostly used for side effects like logging or updating values outside the loop.
//(Sadece var olanı döner)
