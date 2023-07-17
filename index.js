function isPalindrome(word) {
  return word ===
  word.split('').reverse().join('');
}

/* 
  I need to take the word and create another word by reversing the original.
  Then I need to check if the original and duplicate words are the same
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
