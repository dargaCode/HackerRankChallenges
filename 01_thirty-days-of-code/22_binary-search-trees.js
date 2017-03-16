
// https://www.hackerrank.com/challenges/30-binary-search-trees

// Given an array of integers, store the integers in a Binary Search Tree. Print the node count of the resultant BST, then print its height.

// CLASSES

function Node(data) {
  this.data = data;
  this.leftChild = null;
  this.rightChild = null;
}

function BinarySearchTree(rootValue = null) {
  this.root = null;

  // allow instantiation with or without starting value
  if (rootValue != null) {
    this.root = new Node(rootValue);
  }

  // PUBLIC METHODS

  this.insert = function(data) {
    if (this.root === null) {
      this.root = new Node(data);
    } else {
      recursiveInsert(this.root, data);
    }
  }

  this.countNodes = function() {
    const root = this.root;
    const nodeCount = recursiveCountNodes(root);

    return nodeCount;
  }

  this.getEdgeHeight = function() {
    const root = this.root;

    const nodeHeight = recursiveMaxHeight(root);
    const edgeHeight = nodeHeight - 1;

    return edgeHeight;
  }

  // HELPER METHODS

  function recursiveInsert(node, newData) {
    const dataGoesLeft = newData <= node.data;
    const dataGoesRight = newData > node.data;
    const leftEmpty = !node.leftChild;
    const rightEmpty = !node.rightChild;

    if (dataGoesLeft) {
      if (leftEmpty) {
        node.leftChild = new Node(newData);
      } else {
        // go deeper
        recursiveInsert(node.leftChild, newData);
      }
    } else if (dataGoesRight) {
      if (rightEmpty) {
        // go deeper
        node.rightChild = new Node(newData);
      } else {
        recursiveInsert(node.rightChild, newData);
      }
    }
  }

  function recursiveCountNodes(node) {
    if (node === null) {
      return 0;
    }

    const leftCount = recursiveCountNodes(node.leftChild);
    const rightCount = recursiveCountNodes(node.rightChild);

    const nodeCount = leftCount + rightCount + 1;

    return nodeCount;
  }

  function recursiveMaxHeight(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = recursiveMaxHeight(node.leftChild);
    const rightHeight = recursiveMaxHeight(node.rightChild);

    const height = 1 + Math.max(leftHeight, rightHeight);

    return height;
  }
}

// MAIN

(function main() {
  const bst = new BinarySearchTree(22);

  bst.insert(33);
  bst.insert(44);
  bst.insert(55);
  bst.insert(11);
  bst.insert(12);
  bst.insert(10);
  bst.insert(13);
  bst.insert(56);

  const nodeCount = bst.countNodes();

  console.log('Total nodes:', nodeCount);

  const treeHeight = bst.getEdgeHeight();

  console.log('Edge height:', treeHeight);
}());
