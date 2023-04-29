class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(array) {
    const sortedArr = [...new Set(array.sort((a, b) => a - b))];
    this.root = this.buildTree(sortedArr, 0, sortedArr.length - 1);
  }

  buildTree(array, start, end) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let node = new Node(array[mid]);

    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);

    return node;
  }

  // accepts a value to insert.
  insert(value, root = this.root) {
    if (root === null) {
      root = new Node(value);
      return root;
    }

    if (value === root.data) {
      console.log("Duplicates are now allowed");
      return;
    }

    if (value < root.data) {
      root.left = this.insert(value, root.left);
    }

    if (value > root.data) {
      root.right = this.insert(value, root.right);
    }
    return root;
  }

  // accepts a value to delete.
  delete(value, root = this.root) {
    if (root === null) return root;

    if (value < root.data) {
      root.left = this.delete(value, root.left);
    } else if (value > root.data) {
      root.right = this.delete(value, root.right);
    } else {
      // Case 1: No Children
      if (root.left === null && root.right === null) {
        return null;
      }

      // Case 2: One Child
      if (root.right === null) {
        return root.left;
      } else if (root.left === null) {
        return root.right;
      }

      // Case 3: Two Children
      let temp = this.minValue(root.right);
      root.data = temp.data;
      root.right = this.delete(temp.data, root.right);
    }
    return root;
  }

  minValue(root = this.root) {
    if (root.left === null) {
      return root;
    } else {
      return this.minValue(root.left);
    }
  }

  // accepts a value and returns the node with the given value.
  find(value, root = this.root) {
    if (root === null || root.data === value) return root;

    if (root.data < value) return this.find(value, root.right);

    return this.find(value, root.left);
  }

  // accepts another function as a parameter.
  levelOrder() {}

  preorder() {}

  inorder() {}

  postorder() {}

  //  accepts a node and returns its height.
  height() {}

  // accepts a node and returns its depth.
  depth() {}

  // checks if the tree is balanced.
  isBalanced() {}

  // rebalances an unbalanced tree
  rebalance() {}
}

function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }

  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }

  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);

  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

const arr = [1, 2, 3, 4, 6, 7, 8];
const treeC = new Tree(arr);
// prettyPrint(treeC.root);
// prettyPrint(treeC.root);
// treeC.delete(7);
prettyPrint(treeC.root);
// console.log(treeC);
