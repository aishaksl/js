// STRING METHODS

/* 
   charAt()      : Returns the character at the given index

   concat()      : Joins strings together

   indexOf()     : Returns the index of first match, or -1

   lastIndexOf() : Returns the index of last match

   toUpperCase() : Converts to uppercase

   toLowerCase() : Converts to lowercase

   trim()        : Removes spaces from both ends

   slice(start, end) : Extracts part of a string

   substring(start, end) : Similar to .slice() but can’t accept negative indexes

   replace(old, new) : Replaces first match

   split(separator)  : Splits string into array.
                       Separator (ayırıcı) olan yerler yok edilir
	                   Geriye kalan parçalar array’e konur)
   
   valueOf() : Returns the primitive value (the actual string content) of a String object.

   startsWith() : 

   endsWith()   : 

*/

let sentence = "JavaScript is fun and powerful!";

console.log(sentence.charAt(5));
console.log(sentence.concat(" Let's learn."));
console.log(sentence.indexOf("fun"));
console.log(sentence.lastIndexOf("a"));
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log("  JavaScript is fun and powerful!  ".trim());
console.log(sentence.slice(0, 10));
console.log(sentence.substring(0, 10));
console.log(sentence.replace("fun", "awesome"));
console.log(sentence.split(" "));
console.log(sentence.valueOf());
console.log(sentence.startsWith("JavaScript"));
console.log(sentence.endsWith("!"));

// NOTE
// All string methods in JavaScript are non-destructive
// They do not change the original string.
// However, if you assign the result back to the variable, the change becomes permanent:
// Make it permanent like this:

// str = str.trim();
// str = str.toLowerCase();
// str = str.replace("old", "new");
// str = str.slice(0, 5);
// str = str.concat(" more text");
