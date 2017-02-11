
// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies

// Beautiful Numbers are integers for which (the number minus the reverse of the number) divided by a divisor, is an integer. Given an int and a divisor, print whether it is a Beautiful Number.

// FUNCTIONS

function isIntegerBeautiful(n, divisor) {
  const reversedN = reverseInteger(n);
  const processedN = (n - reversedN) / divisor;

  const beautiful = processedN % 1 === 0;

  return beautiful;
}

function reverseInteger(n) {
  const str = n.toString();
  const reversedStr = reverseString(str);
  const reversedInteger = Number(reversedStr);

  return reversedInteger;
}

function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str.charAt(i);

    reversed += char;
  }

  return reversed;
}

// MAIN

(function main() {
  const divisor = 6;
  const n = 9876543210;

  const beautiful = isIntegerBeautiful(n, divisor);

  console.log(beautiful);
}());
