// Brute Force: O(n ^ 2) time | O(1) space
function twoSumBruteForce(arr, target) {
  for (let i = 0; arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === target) {
        return [i, k];
      }
    }
  }

  return [];
}

// Hash Table: O(n) time | O (n) space
function twoSumHashTable(arr, target) {
  const hashNumber = {};

  for (const num of arr) {
    const potentialMatch = target - num;

    if (potentialMatch in hashNumber) {
      return [potentialMatch, num];
    } else {
      hashNumber[num] = true;
    }
  }

  return [];
}
console.log(twoSumHashTable([1, 5, 8, -1, 6, -9, 3], 7)); // Output: [8, -1]
