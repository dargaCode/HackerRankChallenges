
// https://www.hackerrank.com/challenges/30-arrays

// Given an array of integers, its elements in reverse order, as a single line of space-separated numbers.

// FUNCTIONS

function printReverseElements(arr) {
  const lastIndex = arr.length - 1;

  let result = '';

  for (let i = 0; i < arr.length; i++) {
    const reverseIndex = lastIndex - i;
    const element = arr[reverseIndex];

    result += `${element} `;
  }

  console.log(result.trim());
}

// MAIN

(function main() {
  const arr = ['a','b','c','d','e','f','g'];

  printReverseElements(arr);
}());
