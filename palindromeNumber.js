// Palindrome Number. Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x) {
  if (x.toString().split("").reverse("").join("") == x) {
    return true;
  }
  return false;
};

console.log(isPalindrome(232));
