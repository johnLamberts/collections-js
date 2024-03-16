const bubbleSort = (arr) => {
  let swapped = false;
  const newArr = [...arr];

  for (let i = 1; i < newArr.length; i += 1) {
    swapped = false;
    let firstItem = newArr[i];

    for (let j = 0; j < newArr.length - 1; j++) {
      if (firstItem > newArr[j + 1]) {
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      return newArr;
    }
  }

  return newArr;
};
