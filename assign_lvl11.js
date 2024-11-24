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
        word[word.length-1] === 'a' &&
        word[word.length-1] === 'e' &&
        word[word.length-1] === 'i' &&
        word[word.length-1] === 'o' &&
        word[word.length-1] === 'u' 
    ) {
        return false;
    } else {
        return true;
    }
});
console.log(notEndsWithVowel);