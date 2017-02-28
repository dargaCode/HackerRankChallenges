
// https://www.hackerrank.com/challenges/30-queues-stacks

/* Use a queue and a stack to determine whether a given string is a palindrome.

[I decided to roll my own linked list instead of using javascript arrays] */

// CLASSES

function Stack() {
  const list = new LinkedList();

  this.push = function(data) {
    list.insertHead(data);
  }

  this.pop = function() {
    return list.removeHead();
  }

  this.display = function() {
    list.display();
  }

  this.getLength = function() {
    return list.length;
  }

  this.isEmpty = function() {
    return list.isEmpty();
  }
}

function Queue() {
  const list = new LinkedList();

  this.enqueue = function(data) {
    list.insertTail(data);
  }

  this.dequeue = function() {
    return list.removeHead();
  }

  this.display = function() {
    list.display();
  }

  this.getLength = function() {
    return list.length;
  }

  this.isEmpty = function() {
    return list.isEmpty();
  }
}

function LinkedList() {
  this.head = null;
  this.length = 0;

  this.insertHead = function(data) {
    const newHead = new Node(data);

    newHead.next = this.head;
    this.head = newHead;

    this.length++;
  }

  this.removeHead = function() {
    if (this.isEmpty()) {
      return null;
    } else {
      const oldHead = this.head;

      this.head = this.head.next;

      this.length--;

      return oldHead.data;
    }
  }

  this.insertTail = function(data) {
    const newTail = new Node(data);
    let currentNode = this.head;

    if (this.isEmpty()) {
      this.head = newTail;
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newTail;
    }

    this.length++;
  }

  this.removeTail = function() {
    if (this.isEmpty()) {
      return null;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    const oldTail = currentNode;

    if (previousNode) {
      console.log('shit');
    }

    // allows the last node to be successfully removed
    if (previousNode) {
      previousNode.next = null;

      this.length --;
    } else {
      this.head = null;
    }

    return oldTail.data;
  }

  this.traverse = function(callback) {
    let currentNode = this.head;

    while (currentNode) {
      callback(currentNode);

      currentNode = currentNode.next;
    }
  }

  this.isEmpty = function() {
    return this.head === null;
  }

  this.display = function() {
    console.log('\n');
    console.log('node data:');

    this.traverse(function(currentNode) {
      const data = ` - ${currentNode.data}`;

      console.log(data);
    })
  }
}

function Node(data) {
  this.data = data;
  this.next = null;
}

// FUNCTIONS

function isPalindrome(str) {
  const queue = new Queue();
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    queue.enqueue(char);
    stack.push(char);
  }

  while (!queue.isEmpty() && !stack.isEmpty()) {
    const queueChar = queue.dequeue();
    const stackChar = stack.pop();

    if (queueChar != stackChar) {
      return false;
    }
  }

  if (queue.isEmpty() && stack.isEmpty()) {
    return true;
  }
}

// MAIN

(function main() {
  const str = 'amanaplanacanalpanama';

  const palindrome = isPalindrome(str);

  console.log(palindrome);
}());
