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
let truncate = (text, len) => text.slice(0, len);

// Test
console.log(truncate('John Snow', 4)); // "John";


// Write a function to convert a string name in abbreviated form.
/* Requirements
  @name abbrevName
  @parameter (string) fullName
  @return String
*/

// your code goes here
let abbrevName = (fullName) => {
  let nameArr = fullName.split(" ");
  return nameArr[0] + " " + nameArr[nameArr.length-1][0];
} 

// Test
console.log(abbrevName('Robin Singh')); //"Robin S."
console.log(abbrevName('John Snow')); //"John S."example.com"


// Write a function to hide email addresses to protect from unauthorized user.
/* Requirements
  @name protect
  @parameter (string) email
  @return String
*/

// your code goes here
let protect = (email) => email.replace(email.substring(4, email.indexOf('@')), '...');

// Or

// let protect = (email) => {
//   return email.slice(0, 4) + '...@example.com';
// }

// Test
console.log(protect('johnS@example.com')); // "john...@example.com"
console.log(protect('arya_stark@example.com')); // "arya...@


// Write a function to hide email addresses to protect from unauthorized user. The number of dots should be same as length of left characters.
/* Requirements
  @name protectAgain
  @parameter (string) email
  @return String
*/

// your code goes here
let protectAgain = (email) => {
  for(let i = 4; i < email.indexOf('@'); i++) {
    email[i] = '.';
  }
return email;
}

// Test
console.log(protectAgain('johnS@example.com')); // "john.@example.com"
console.log(protectAgain('arya_stark@example.com')); // "arya......@example.com"
