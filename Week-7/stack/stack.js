class MyStack {
  constructor() {
    this.items = [];
    this.top = -1;
    this.maxSize = 5;
  }

  get size() {
    return this.items.length;
  }

  push(newItem) {
    if (this.size === this.maxSize) {
      throw "Stack Overflow";
    }
    this.items.push(newItem);
    this.top = newItem;
  }

  pop() {
    let currentSize = this.size;
    if (currentSize === 0) {
      throw "Stack Underflow";
    }
    this.top = this.items[currentSize - 2];
    let topItem = this.items.pop();
    return topItem;
  }

  peek() {
    if (currentSize === 0) {
      throw "Stack is empty";
    }
    return this.top;
  }

  logItems() {
    console.log(this.items);
  }
}

export default MyStack;
