class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function ValidateBinaryTree(root) {
  if (root == null) return true;

  if (
    root.left != null &&
    (root.left.val > root.val || !ValidateBinaryTree(root.left))
  ) {
    return false;
  }

  if (
    root.right != null &&
    (root.right.val < root.val || !ValidateBinaryTree(root.right))
  ) {
    return false;
  }
  return true;
}

try {
  var root = new Node(5);
  root.left = new Node(1);
  root.right = new Node(4);
  root.right.left = new Node(3);
  root.right.right = new Node(6);

  console.log(ValidateBinaryTree(root));
} catch (e) {
  console.warn(e);
}
