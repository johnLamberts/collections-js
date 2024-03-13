const LinkedList = require("../linked-list/Linked-List");
class HashTable {
  constructor(hashTableSize = 32) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());

    this.keys = {};
  }
}
