const LinkedList = require("../linked-list/Linked-List");
class HashTable {
  constructor(hashTableSize = 32) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());

    this.keys = {};
  }

  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAcc, keySymbol) => hashAcc + keySymbol.charCodeAt(0),
      0
    );

    return hash % this.buckets.length;
  }

  set(key, value) {
    const keyHash = this.hash(key);

    this.keys[key] = keyHash;

    const bucketLinkedList = this.buckets[keyHash];
  }

  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }
}
