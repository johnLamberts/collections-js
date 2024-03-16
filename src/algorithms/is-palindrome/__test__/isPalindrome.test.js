const { default: isPalindrome } = require("../IsPalindrome");

describe("palindromeCheck", () => {
  it("should return whether or not the string is a palindrome", () => {
    expect(isPalindrome("a")).toBe(true);
  });
});
