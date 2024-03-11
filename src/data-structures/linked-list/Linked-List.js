const ListNode = require("./ListNode");
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    // Make a new node to be a head;
    const newNode = new ListNode(value, this.head);

    this.head = newNode;

    //if there is no tail yet, then let's make new node a tail
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }
}

const newList = new LinkedList();
newList.prepend(10);
newList.append(23);
console.log(
  `Head node: ${newList.head.next.value} ------- Tail Node: ${newList.tail.value}`
);
