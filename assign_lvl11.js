let words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot',
    'rhythm',
  ];
  
  // - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(word) {
    [...words].sort((a, b) => b.length-a.length);
    return words[0];
};
console.log(words);
words.find(findLongestWord);

// - Convert the above array "words" into an array of length of word instead of word.
console.log(words);
for(let i = 0; i < words.length; i++) {
   [...words][i] = words[i].length;
}

// Or
words.map((word) => word.length);
// console.log(words);

// - Create a new array that only contains word with atleast one vowel.
let wordAtleastOneVowel = [];
for(let word of words) {
  if(
    word.includes('a') ||
    word.includes('e') ||
    word.includes('i') ||
    word.includes('o') ||
    word.includes('u')
  ) {
    wordAtleastOneVowel.push(word);
  }
}
console.log(wordAtleastOneVowel);

// Or
let vowelsWord = words.filter((word) =>
    {
        if(
        word.includes('a') ||
        word.includes('e') ||
        word.includes('i') ||
        word.includes('o') ||
        word.includes('u') 
    ) {
        return true;
    } else {
        return false;
    }
}
);
console.log(vowelsWord);
console.log(words);

// - Find the index of the word "rhythm".
console.log(words.indexOf('rhythm'));

// - Create a new array that contians words not starting with vowel.
let notStrtWithVowel = words.filter((word) => {
    if(
        // !word.startsWith('a') &&
        // !word.startsWith('e') &&
        // !word.startsWith('i') &&
        // !word.startsWith('o') &&
        // !word.startsWith('u')  

        word[0] === 'a' ||
        word[0] === 'e' ||
        word[0] === 'i' ||
        word[0] === 'o' ||
        word[0] === 'u' 
    ) {
        return false;
    } else {
        return true;
    }
});
console.log(notStrtWithVowel);


// - Create a new array that contianse words not ending with vowel.

let notEndsWithVowel = words.filter((word) => {
    if(
        // word[word.length-1] === 'a' ||
        // word[word.length-1] === 'e' ||
        // word[word.length-1] === 'i' ||
        // word[word.length-1] === 'o' ||
        // word[word.length-1] === 'u' 

        !word.endsWith('a') &&
        !word.endsWith('e') &&
        !word.endsWith('i') &&
        !word.endsWith('o') &&
        !word.endsWith('u') 
    ) {
        return true;
    } else {
        return false;
    }
});
console.log(notEndsWithVowel);


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers.
let sumArray = (arr) => {
    return arr.reduce((acc, num) => {
        return acc + num;
    }, 0);
};
console.log(sumArray(numbers));

// Or
// function sumArray(arr) {
//     arr.forEach(num => {
//         sum = sum + num;
//     });
//     return sum;
// };
// console.log(sumArray(numbers));

// function sumArray(arr) {
//     return arr.reduce((acc, num) => {
//         return acc + num;
//     }, 0);
// };
// console.log(sumArray(numbers));


// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...].
let multipliedBy3 = numbers.filter(num => num % 3 === 0);
console.log(multipliedBy3);

// - Create a new array that contains only even numbers.
let evenNumbers = numbers.filter(num => num%2 === 0);
console.log(evenNumbers);

// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter(num => num%2 != 0);
console.log(oddNumbers);

// - Create a new array that should have true for even number and false for odd numbers.
let returnTrue = numbers.map(num => {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
});
console.log(returnTrue);

// - Sort the above number in assending order.
[...numbers].sort((a, b) => a-b);

// - Does sort mutate the original array?
/*
Yes, it mutates the original Array.
*/

// - Find the sum of the numbers in the array.
let sumOfNums = ((acc, num) => acc + num);
console.log(numbers.reduce(sumOfNums));

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers.
let averageNumbers = (arr) => {
    let sum = arr.reduce((acc, n) => {
        return acc + n;
    }, 0);
    return sum / arr.length;
};
console.log(averageNumbers(numbers));


let strings = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace',
  ];
  
  // - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
  let averageWordLength = (arr) => {
    let sumOfWords = arr.reduce((acc, word) => {
        return acc + word.length;
    }, 0);
    return sumOfWords / arr.length;
  };
  console.log(averageWordLength(strings));

