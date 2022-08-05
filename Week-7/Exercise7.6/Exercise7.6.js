import MyStack from "../stack/stack";

class Queue {
  constructor() {
    this.inbox = new MyStack();
    this.outbox = new MyStack();
  }

  enqueue(item) {
    this.inbox.push(item);
  }

  dequeue() {
    if (this.outbox.size === 0) {
      if (this.inbox.size === 0) {
        throw "Queue Underflow";
      } else {
        while (this.inbox.size > 0) {
          let item = this.inbox.pop();
          this.outbox.push(item);
        }
      }
    }
    let frontItem = this.outbox.pop();
    return frontItem;
  }

  get size() {
    return this.inbox.items.length + this.outbox.items.length;
  }

  get isEmpty() {
    return this.size === 0;
  }

  log() {
    while (this.inbox.size > 0) {
      let item = this.inbox.pop();
      this.outbox.push(item);
    }
    console.log("Current Queue: ", this.outbox.items);
  }
}

try {
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.enqueue(5);
  queue.enqueue(6);
  queue.dequeue();
  queue.log();
} catch (e) {
  console.warn(e);
}
