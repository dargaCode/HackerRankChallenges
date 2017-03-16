
// https://www.hackerrank.com/challenges/30-binary-trees

// Given a binary tree, traverse its trees via breadth-first traversal and depth-first traversal. Print the results of each traversal as a space-separated string of node data.

// CONSTANTS

const TREE = {
  data: 'A',
  left: {
    data: 'B',
    left: {
      data: 'D',
      left: {
        data: 'H',
        left: null,
        right: null,
      },
      right: {
        data: 'I',
        left: null,
        right: null,
      },
    },
    right: {
      data: 'E',
      left: {
        data: 'J',
        left: null,
        right: null,
      },
      right: {
        data: 'K',
        left: null,
        right: null,
      },
    },
  },
  right: {
    data: 'C',
    left: {
      data: 'F',
      left: {
        data: 'L',
        left: null,
        right: null,
      },
      right: {
        data: 'M',
        left: null,
        right: null,
      },
    },
    right: {
      data: 'G',
      left: {
        data: 'N',
        left: null,
        right: null,
      },
      right: {
        data: 'O',
        left: null,
        right: null,
      },
    },
  },
};

// CLASSES

const Queue = function(initialValue = null) {
  const array = [];

  if (initialValue) {
    array.push(initialValue);
  }

  this.enqueue = function(value) {
    array.unshift(value);
  }

  this.dequeue = function() {
    const dequeued = array.pop();

    return dequeued;
  }

  this.isEmpty = function() {
    return this.getLength() === 0;
  }

  this.getLength = function() {
    return array.length;
  }

  this.display = function() {
    console.log(array);
  }
}

const Stack = function(initialValue = null) {
  const array = [];

  if (initialValue) {
    array.push(initialValue);
  }

  this.push = function(value) {
    array.push(value);
  }

  this.pop = function() {
    const popped = array.pop();

    return popped;
  }

  this.isEmpty = function() {
    return this.getLength() === 0;
  }

  this.getLength = function() {
    return array.length;
  }

  this.display = function() {
    console.log(array);
  }
}

// FUNCTIONS

function breadthFirstTraverse(rootNode) {
  const queue = new Queue(rootNode);
  let outputArray = [];

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();

    outputArray.push(currentNode.data);

    const leftChild = currentNode.left;
    const rightChild = currentNode.right;

    if (leftChild) {
      queue.enqueue(leftChild);
    }

    if (rightChild) {
      queue.enqueue(rightChild);
    }
  }

  return outputArray;
}

function depthFirstTraverse(rootNode) {
  const stack = new Stack(rootNode);
  let outputArray = [];

  while (!stack.isEmpty()) {
    const currentNode = stack.pop();

    outputArray.push(currentNode.data);

    const rightChild = currentNode.right;
    const leftChild = currentNode.left;

    if (rightChild) {
      stack.push(rightChild);
    }

    if (leftChild) {
      stack.push(leftChild);
    }
  }

  return outputArray;
}

function recursiveTraverse(node) {
  let outputArray = [];

  recurse(node);

  function recurse(node) {

    if (!node) {
      return
    }

    outputArray.push(node.data);

    if (node.left) {
      recurse(node.left);
    }

    if (node.right) {
      recurse(node.right);
    }
  }

  return outputArray;
}

// MAIN

(function main() {
  const queueBfs = breadthFirstTraverse(TREE).join(' ');
  const recursiveDfs = recursiveTraverse(TREE).join(' ');
  const stackDfs = depthFirstTraverse(TREE).join(' ');

  console.log(queueBfs);
  console.log(recursiveDfs);
  console.log(stackDfs === recursiveDfs);
}());
