
// https://www.hackerrank.com/challenges/30-conditional-statements

/* If n is odd, print Weird

If n is even and in the inclusive range of 2 to 5, print Not Weird

If n is even and in the inclusive range of 6 to 20, print Weird

If n is even and greater than 20, print Not Weird */

// CONSTANTS

const DEFAULT_MESSAGE = 'Not Weird';
const WEIRD_MESSAGE = 'Weird';

// FUNCTIONS

function isWeird(num) {
  let weird;

  const odd = !isEven(num);

  if (odd) {
    weird = true;
  } else if (isWithin(num, 2, 5)) {
    weird = false;
  } else if (isWithin(num, 6, 20)) {
    weird = true;
  } else if (num > 20) {
    weird = false;
  }

  return weird;
}

function isEven(num) {
  if (num === 0) {
    return true;
  }

  return num % 2 === 0;
}

function isWithin(num, min, max) {
  return num >= min && num <= max;
}

// MAIN

(function main() {
  const num = 24;

  const weird = isWeird(num);
  const output = weird ? WEIRD_MESSAGE : DEFAULT_MESSAGE;

  console.log(output);
}());
