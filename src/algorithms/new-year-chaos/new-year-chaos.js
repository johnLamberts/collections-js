const minimunBribes = (q) => {
  const bribes = 0;

  for (let i = 0; i < q.length; i++) {
    const pos = q[i],
      at = i + 1;

    if (pos - at > 2) {
      return "Too chaotic";
    }

    for (let j = Math.max(0, pos - 2); j < i; j++) {
      if (q[j] > pos) {
        bribes++;
      }
    }
  }

  return bribes;
};
