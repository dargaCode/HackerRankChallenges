
// https://www.hackerrank.com/challenges/30-running-time-and-complexity

// Given an integer, determine and print whether it's Prime or Not Prime.

// CONSTANTS

const TRUE_MESSAGE = 'Prime';
const FALSE_MESSAGE = 'Not prime';

// FUNCTIONS

function isPrime(num) {
  const sqrt = Math.floor(Math.sqrt(num));

  if (num < 2) {
    return false;
  }

  let prime = true;

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  return prime;
}

// MAIN

(function main() {
  const prime = isPrime(5);

  const message = prime ? TRUE_MESSAGE : FALSE_MESSAGE;

  console.log(message);
}());
