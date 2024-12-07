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
console.log(protect('arya_stark@example.com')); // "arya...@example.com"


// Write a function to hide email addresses to protect from unauthorized user. The number of dots should be same as length of left characters.
/* Requirements
  @name protectAgain
  @parameter (string) email
  @return String
*/

// your code goes here
let protectAgain = (email) =>  {
  let protectEmail = email.substring(0, 4);
  for(let i = 4; i < email.indexOf('@'); i++) {
    protectEmail = protectEmail + '.';
  }
  protectEmail = protectEmail + email.substring(email.indexOf('@'));
  return protectEmail;
};

// OR

let protectAgain2 = (email) => {
  let arrEmail = email.split('@');
  // let dotLength = arrEmail[0].length - 4;
  let first = arrEmail[0].substring(0, 4).padEnd(arrEmail[0].length, '.');
  let second = `@${arrEmail[1]}`;
  return first + second;
  return dotLength;
}
// Test

console.log(protectAgain2('johnS@example.com')); // "john.@example.com"
console.log(protectAgain2('arya_stark@example.com')); // "arya......@example.com"


// Write a function to parameterize a string.
/* Requirements
  @name parameterize
  @parameter (string) str
  @return String
*/

// your code goes here
let parameterize = (str) => str.split(" ").join("-");

// Test
console.log(parameterize('John Snow from Winterfell')); // "john-snow-from-winterfell"
console.log(parameterize('Arya Stark from Winterfell')); // "arya-stark-from-winterfell"


// Write a function to capitalize the first letter of a string.
/* Requirements
@name capitalizeFirst
@parameter (string, number) text, len
@return String
*/

// your code goes here

// let capitalizeFirst = (str) => {
// let arr = str.slice(1, str.length-1);
// return str[0].toUpperCase().concat(arr);
// };

// OR

let capitalizeFirst = (str) => str.replace(str[0], str[0].toUpperCase());
// Test
console.log(capitalizeFirst('we are learning')); // "We are learning"
console.log(capitalizeFirst('learning Javascript')); // "Learning Javascript"


// Write a function to capitalize the first letter of each word in a string.
/* Requirements
  @name capitalizeWords
  @parameter (string) text
  @return String
*/

// your code goes here

let capitalizeWords = (str) => {
  let strArr = str.split(" ");
  for(let i=0; i<strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    
  }
  return strArr.join(" ");
}

// Test
console.log(capitalizeWords('we are learning')); // "We Are Learning"
console.log(capitalizeWords('learning javascript')); // "Learnign Javascript"


// Write a function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
/* Requirements
  @name swapcase
  @parameter (string) text
  @return String
*/

// your code goes here
let swapcase = (str) => {
  let splitStr = str.split("");
   return splitStr.map(letter => {
    if(letter === letter.toUpperCase()) {
     return letter.toLowerCase();
    } else {
      return letter.toUpperCase();
    }
  }).join("");
}

// Tets
console.log(swapcase('AaBbc')); // "aAbBC"
console.log(swapcase('abcDef')); // "ABCdEF"


// Write a function to convert a string into camel case.

/* Requirements
  @name camelize
  @parameter (string) text
  @return String
*/
// your code goes here
let camelize = (str) => {
  let arr = str.split(" ");
  return "hello" + arr[1][0].toUpperCase() + arr[1].slice(1);
}

// Test
console.log(camelize('hello world')); // "helloWorld"
console.log(camelize('main exercise')); // "mainExercise"


// Write a function to uncamelize a string (output should be all in lowercase).
/* Requirements
  @name uncamelize
  @parameter (string, string) text, joinStr
  @return String
*/
// your code goes here
let uncamelize = (str, joinStr) => {
 
};

// Tets
console.log(uncamelize('helloWorld', '_')); // "hello_world"
console.log(uncamelize('learningJavascript', '_')); // "learning_javascript"
console.log(uncamelize('learningJavaScriptAgain', '_')); // "learning_java_script_again"


// Write a function to concatenates a given string n times (default is 1).
/* Requirements
  @name repeat
  @parameter (string, number) text, times
  @return String
*/

// your code goes here
let repeat = (str, times) => {
  // let preStr = "";
  // for(let i=1; i<=times; i++)
  //   preStr += str;
  //   return preStr;

  // OR
  return str.repeat(times);
  }
// Test
console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"
console.log(repeat('Ha!')); // "Ha"


// Write a function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with ("…") (by default) or specified characters.

/* Requirements
  @name testTruncate
  @parameter (string, number, string) text, len, postfix
  @return String
*/
// your code goes here
var postfix = '...';
let testTruncate = (str, len, postfix) => {
  return str.slice(0, len) + " " + postfix;
}

// Test
console.log(testTruncate('We are doing JS string exercises.', 15, '!!')); //"We are doing !!"
console.log(testTruncate('We are doing JS string exercises.', 15)); //"We are doing ..."


// Write a function to chop a string into chunks of a given length.
/* Requirements
  @name stringChop
  @parameter (string, number) text, size (default to 1)
  @return String
*/

// your code goes here
let stringChop = (str, size) => {

}

// Test
console.log(stringChop('hello world', 2)); // ["he", "ll", "o ", "wo", "rl", "d"]
console.log(stringChop('hello')); // ["h", "e", "l", "l", "o"]


// Write a function to count the occurrence of a substring (case doesn't matter) in a string.
/* Requirements
  @name count
  @parameter (string, string) text, char
  @return Number
*/

// your code goes here
let count = (str, char) => {
  let arr = str.split(" ");
  let lowerCaseArr = arr.map(word => word.toLowerCase());
  return lowerCaseArr.filter(word => (word === char));
}

// Test
console.log(count('The quick brown fox jumps over the lazy dog', 'the')); // 2
console.log(count('hello again hello', 'hello')); // 2
console.log(count('hello', 'one')); // 0


// Write a function to strip leading and trailing spaces from a string.
/* Requirements
  @name strip
  @parameter (string) text
  @return String
*/

// your code goes here
let strip = (str) => str.trim();

// Test
console.log(strip('   Hello World ')); // "Hello World"
console.log(strip('Hello World      ')); // "Hello World"


// Write a function to truncate a string to a certain number of words.
/* Requirements
  @name chopWords
  @parameter (string, number) text, words (default to 1)
  @return String
*/

// your code goes here
let chopWords = (str, num) => str.split(" ").slice(0, num).join(" ");
// Test
console.log(chopWords('The quick brown fox jumps over the lazy dog', 4)); // "The quick brown fox"
console.log(chopWords('I am learning JavaScript', 4)); // "I am learning JavaScript"


// Write a function to reverse an string
/* Requirements
  @name reverseString
  @parameter (string) text
  @return String
*/

let alphabetize = (str) => {
  let arr = str.split("");
  return arr.reverse().join("");
};

// Test
console.log(alphabetize('United States')); // 'setatS detinU'
console.log(alphabetize('Hello World')); // 'dlroW olleH'