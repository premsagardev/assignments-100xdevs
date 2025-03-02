/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = 0;
    ArrayBuffer = str.toLowerCase();
    for(let s of ArrayBuffer){
      if (vowels.includes(s)){
        result++;
      }
    }
    return result;
  }
module.exports = countVowels;