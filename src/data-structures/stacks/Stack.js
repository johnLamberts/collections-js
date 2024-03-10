// Using Array
class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    return this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }

  isPeek() {
    if (this.isEmpty()) return null;
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return !this.stack.length;
  }

  print() {
    return this.stack.toString();
  }
}

module.exports = Stack;
