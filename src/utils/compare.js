export default class Compare {
  constructor(compareFunction) {
    this.compare = compareFunction || Compare.defaultCompareFunction;
  }

  static defaultCompareFunction(a, b) {
    if (a === b) return a;

    return a < b ? -1 : 1;
  }
}
