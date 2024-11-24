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
    words.sort((a, b) => b.length-a.length);
    return words[0];
};
console.log(words);
words.find(findLongestWord);

// - Convert the above array "words" into an array of length of word instead of word.
for(let i = 0; i < words.length; i++) {
    console.log(words[i].length());
    // words.push();
}
console.log(words[1].length);