import Stack from "./Stack";

describe("Stack", () => {
  const stack = new Stack();
  it("should create empty stack", () => {
    expect(stack).not.toBeNull();
    expect(stack.stack).not.toBeNull();
  });

  it("should push data to Stack", () => {
    stack.push(1);
    stack.push(2);

    stack.print();

    expect(stack.print()).toBe("1,2");
  });

  it("should peek data to Stack", () => {
    expect(stack.isPeek()).toBe(2);
  });
});
