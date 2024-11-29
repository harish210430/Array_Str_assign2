// @name - name of the function
// @parameter - parameter name the function accepts
// @return - data type of return value

/* Requirements
  @name isString
  @parameter (any value) val
  @return Boolean
*/

// your code goes here

let isString = (val) => typeof(val) === "string";

// Test
console.log(isString('tony stark')); // true;
console.log(isString([1, 2, 4, 0])); // false;


/* Requirements
  @name isBlank
  @parameter (any value) val
  @return Boolean
*/

// your code goes here
let isBlank = (val) => val === '';

// Test
console.log(isBlank('')); // true;
console.log(isBlank('abc')); // false;



/* Requirements
  @name stringToArray
  @parameter (string) text
  @return Array
*/

// your code goes here
let stringToArray = (text) => text.split(" "); 

// Test
console.log(stringToArray('Hello World')); // ["Hello", "World"];
console.log(stringToArray('Lady Bird')); // ["Lady", "Bird"];


// Write a function to return specified number of characters from a string.
/* Requirements
  @name truncate
  @parameter (string, number) text, len
  @return String
*/
// your code goes here
let truncate = (text, len) => text.slice(0, 4);

// Test
console.log(truncate('John Snow', 4)); // "John";