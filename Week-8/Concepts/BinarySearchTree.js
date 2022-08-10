class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  get isEmpty() {
    return this.root === null;
  }

  insert(value) {
    if (!Number.isInteger(value)) throw "Invalid value";
    let newNode = new Node(value);
    if (this.isEmpty) {
      this.root = newNode;
      return;
    } else {
      this.insertAt(newNode, this.root);
    }
  }

  insertAt(newNode, currentNode) {
    if (newNode.value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        return;
      } else {
        this.insertAt(newNode, currentNode.left);
      }
    } else if (newNode.value > currentNode.value) {
      if (!currentNode.right) {
        currentNode.right = newNode;
        return;
      } else {
        this.insertAt(newNode, currentNode.right);
      }
    } else {
      throw "Node with this value already exists";
    }
  }

  find(value) {
    if (this.isEmpty) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  }
}

export default BinarySearchTree;
