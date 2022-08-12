import BinarySearchTree from "../Concepts/BinarySearchTree";
import MyQueue from "../Concepts/MyQueue";

const LevelOrderTraversal = (bst) => {
  let result = [];
  let queue = new MyQueue();

  let current = bst.root;
  queue.enqueue(current);

  while (!queue.size == 0) {
    current = queue.dequeue();
    result.push(current.value);
    if (current.left) {
      queue.enqueue(current.left);
    }
    if (current.right) {
      queue.enqueue(current.right);
    }
  }
  return result;
};

try {
  let myBinaryTree = new BinarySearchTree();
  myBinaryTree.insert(3);
  myBinaryTree.insert(9);
  myBinaryTree.insert(20);
  myBinaryTree.insert(15);
  myBinaryTree.insert(7);
  console.log(myBinaryTree);

  console.log(LevelOrderTraversal(myBinaryTree));
} catch (e) {
  console.warn(e);
}
