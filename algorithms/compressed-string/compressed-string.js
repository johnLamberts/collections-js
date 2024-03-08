// Solution 1: Using string
function compressedStringFirstSolution(str) {
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }

  return result.length < str.length ? result : str;
}

// Solution 2: Using array
function compressedStringSecondSolution(str) {
  let result = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result.push(str[i] + count);
      count = 1;
    }
  }

  const joinResult = result.join("");

  return joinResult.length < str.length ? joinResult : str;
}

console.log(compressedStringSecondSolution("aacccddd")); // Output: "a2c3d3"
