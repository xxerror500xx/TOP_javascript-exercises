
var palindromes = function(string) {
  // remove anything that is not a-z.
  sanatizedString = string.toLowerCase().replace(/[^a-z]/g,'')
  palindrome = sanatizedString.split('').reverse().join('');

  return sanatizedString === palindrome;
};
module.exports = palindromes;
