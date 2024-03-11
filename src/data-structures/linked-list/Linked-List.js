import ListNode from "./ListNode";

export default class LinkedList {
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
    if (!this.tail) this.tail = newNode;

    console.log(value, this);
    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {}
}

const newList = new LinkedList();

console.log(newList.prepend(10));
