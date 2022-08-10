class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function MaximumDepthOfBinaryTree(root) {
  if (root == null) {
    return 0;
  } else {
    let leftSubTreeDepth = MaximumDepthOfBinaryTree(root.left);
    let rightSubTreeDepth = MaximumDepthOfBinaryTree(root.right);
    return 1 + Math.max(leftSubTreeDepth, rightSubTreeDepth);
  }
}

try {
  var root = new Node(3);
  root.left = new Node(9);
  root.right = new Node(20);
  root.right.left = new Node(15);
  root.right.right = new Node(7);

  var depth = MaximumDepthOfBinaryTree(root);
  console.log(depth);
} catch (e) {
  console.warn(e);
}
