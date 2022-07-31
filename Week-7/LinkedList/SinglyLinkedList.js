class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.maxSize = 10;
  }

  get isEmpty() {
    return this.size === 0;
  }

  get getSize() {
    return this.size;
  }

  getNode(index) {
    if (!Number.isInteger(index)) throw "Invalid index";
    if (index >= this.size) throw "Index too high";
    if (index < 0) throw "Index too low";
    if (index < 0 || index >= this.size) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      console.log(counter, current);
      current = current.next;
      counter++;
    }

    return current;
  }

  setNode(index, value) {
    let node = this.getNode(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  push(value) {
    if (this.size == this.maxSize) throw "List overflow";

    let newNode = new Node(value);

    if (this.isEmpty) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (this.isEmpty) throw "List Underflow";

    let current = this.head;
    let newTail = current;

    while (current.next) {
      console.log("before", current);
      newTail = current;
      current = current.next;
      console.log("after", current);
    }

    this.tail = newTail;

    this.tail.next = null;
    this.size--;
    if (this.isEmpty) {
      this.head = null;
      this.tail = null;
    }
    return current.value;
  }

  unshift(value) {
    if (this.size == this.maxSize) throw "List overflow";

    let newNode = new Node(value);
    if (this.isEmpty) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
    return this;
  }

  shift() {
    if (this.isEmpty) throw "List Underflow";

    let currentHead = this.head;

    this.head = currentHead.next;
    this.size--;
    if (this.isEmpty) {
      this.tail = null;
    }
    return currentHead.value;
  }

  reverse() {
    if (this.size <= 1) return this;

    let tempNode = this.head;
    this.head = this.tail;
    this.tail = tempNode;

    let nextNode;
    let previousNode = null;

    for (let i = 0; i < this.size; i++) {
      nextNode = tempNode.next;
      tempNode.next = previousNode;
      previousNode = tempNode;
      tempNode = nextNode;
    }

    return this;
  }

  log() {
    let aux = [];
    if (this.isEmpty) {
      console.log("---empty---");
      return;
    }
    aux.push(this.head.value);
    let current = this.head;
    while (current.next) {
      let nextNode = current.next;
      aux.push(nextNode.value);
      current = nextNode;
    }
    console.log(aux.join(" -> "));
    return;
  }
}

export default SinglyLinkedList;
