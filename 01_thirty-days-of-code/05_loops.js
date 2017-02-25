
// https://www.hackerrank.com/challenges/30-loops

// Given an integer, print its first 10 multiples. Each multiple should be printed on a new line in the form: n x i = result.

// CONSTANTS

const MULTIPLES = 10;

// FUNCTIONS

function printMultiples(num, multipleCount) {
  for (let i = 1; i <= multipleCount; i++) {
    const product = num * i;
    const message = `${num} x ${i} = ${product}`;

    console.log(message);
  }
}

// MAIN

(function main() {
  const num = 2;

  printMultiples(2, MULTIPLES);
}());
