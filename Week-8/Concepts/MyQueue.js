class MyQueue {
  constructor() {
    this.items = [];
    this.back = -1;
    this.maxSize = 5;
  }

  get size() {
    return this.items.length;
  }

  get isEmpty() {
    return this.items.length === 0;
  }

  enqueue(item) {
    if (this.size === this.maxSize) {
      throw "Queue Overflow";
    }
    this.items.push(item);
    this.back++;
  }

  dequeue() {
    if (this.size === 0) {
      throw "Queue Underflow";
    }
    const frontItem = this.items.shift();
    this.back--;
    return frontItem;
  }

  get isEmpty() {
    return this.items.length === 0;
  }

  logItems() {
    console.log(this.items);
  }
}

export default MyQueue;
