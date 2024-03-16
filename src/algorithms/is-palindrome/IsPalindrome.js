const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;

    left += 1;
    right -= 1;
  }

  return true;
};

export default isPalindrome;
