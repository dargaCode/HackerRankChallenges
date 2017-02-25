
// https://www.hackerrank.com/challenges/30-recursion

// Given a positive integer, print the number's factorial.

// FUNCTIONS

function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// MAIN

(function main() {
  const num = 3;

  const result = factorial(num);

  console.log(result);
}());
