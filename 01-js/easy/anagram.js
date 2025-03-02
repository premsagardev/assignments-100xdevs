/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // step 1 : use str 1 to create a map of all key : occurance
  // step 2 : for each character in str 2, decrement the count of each character
  // step 3 : check if all letters in the map are empty
  //const hash = new Map();
  if ( str1.length != str2.length){
    return false;
  }

  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");

  return s1.toLowerCase == s2.toLowerCase
  // str1.forEach(element => {
  //   if (hash.has(element)){
  //     const value = hash.get(element);
  //     hash.set(element, value+1);
  //   }
  //   else{
  //     hash.set(element, 1);    
  //   }
  // });
  
  // str2.forEach (item => {
  //   if (hash.has(element) == false){
  //     return false;
  //   }
  //   else
  //   {
  //     const val = hash.get(element);
  //     hash.set(element, val - 1);
  //   }
  // });

  // for (let[key, values] of hash.entries()){
  //   if (values != 0){
  //     return false;
  //   }
  // }
  // return true

}

module.exports = isAnagram;
